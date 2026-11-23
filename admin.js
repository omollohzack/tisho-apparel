(() => {
  'use strict';

  const OVERRIDES_KEY = 'tisho-admin-overrides-v1';
  const SESSION_KEY = 'tisho-admin-session-v1';
  const PASSCODE_KEY = 'tisho-admin-passcode-hash-v1';
  const INITIAL_HASH = '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918';
  const DEFAULT_NUMBER = '254746099135';
  const TEXT_FIELDS = ['title', 'short', 'description', 'colour'];
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const esc = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  const clone = value => JSON.parse(JSON.stringify(value));
  const hasOwn = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
  let overrides = loadOverrides();
  if (!overrides.products || typeof overrides.products !== 'object' || Array.isArray(overrides.products)) overrides.products = {};
  let catalogue = [];

  function loadOverrides() {
    try {
      const value = JSON.parse(localStorage.getItem(OVERRIDES_KEY) || 'null');
      return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
    } catch {
      return {};
    }
  }

  function saveOverrides() {
    try {
      localStorage.setItem(OVERRIDES_KEY, JSON.stringify(overrides));
      return true;
    } catch {
      setStatus('Could not save overrides in this browser. Check storage permissions.', true);
      return false;
    }
  }

  function effectiveProducts(defaults) {
    const order = Array.isArray(overrides.order) ? overrides.order : [];
    const seen = new Set();
    const ids = [...order.filter(id => typeof id === 'string' && !seen.has(id) && seen.add(id)), ...defaults.map(product => product.id).filter(id => !seen.has(id))];
    return ids.map(id => defaults.find(product => product.id === id)).filter(Boolean).map(product => {
      const effective = clone(product);
      const edit = overrides.products?.[product.id] || {};
      TEXT_FIELDS.forEach(field => {
        if (typeof edit[field] === 'string') effective[field] = edit[field];
      });
      effective.hidden = edit.hidden === true;
      if (Number.isInteger(edit.primaryPhoto) && edit.primaryPhoto >= 0 && edit.primaryPhoto < effective.photos.length) effective.primaryPhoto = edit.primaryPhoto;
      if (Array.isArray(effective.colours)) effective.colours = effective.colours.filter(colour => !overrides.products?.[colour.product]?.hidden);
      return effective;
    }).filter(product => !product.hidden);
  }

  function whatsappNumber() {
    return typeof overrides.whatsapp === 'string' && /^\d+$/.test(overrides.whatsapp) ? overrides.whatsapp : DEFAULT_NUMBER;
  }

  function whatsappUrl() {
    return `https://wa.me/${whatsappNumber()}`;
  }

  function refreshWhatsAppLinks() {
    $$('[data-whatsapp-link]').forEach(link => {
      const message = link.dataset.whatsappMessage;
      link.href = whatsappUrl() + (message ? `?text=${encodeURIComponent(message)}` : '');
    });
  }

  function refreshPublic() {
    refreshWhatsAppLinks();
    window.dispatchEvent(new CustomEvent('tisho:catalogue-refresh'));
  }

  function setStatus(message, error = false) {
    const status = $('#admin-status');
    status.textContent = message;
    status.classList.toggle('error', error);
  }

  async function digest(value) {
    const bytes = new TextEncoder().encode(value);
    const hash = await crypto.subtle.digest('SHA-256', bytes);
    return [...new Uint8Array(hash)].map(byte => byte.toString(16).padStart(2, '0')).join('');
  }

  function loggedIn() {
    return sessionStorage.getItem(SESSION_KEY) === 'authenticated';
  }

  function showAdmin() {
    closeDrawer();
    const view = $('#admin-view');
    view.classList.add('is-open');
    view.setAttribute('aria-hidden', 'false');
    document.body.classList.add('admin-open');
    $('#admin-panel').hidden = !loggedIn();
    $('#admin-login').hidden = loggedIn();
    $('#admin-login-error').textContent = '';
    if (loggedIn()) renderAdminPanel();
    else $('#admin-passcode').focus({ preventScroll: true });
  }

  function closeAdmin() {
    $('#admin-view').classList.remove('is-open');
    $('#admin-view').setAttribute('aria-hidden', 'true');
    document.body.classList.remove('admin-open');
    $('#admin-passcode').value = '';
    $('#admin-open').focus({ preventScroll: true });
  }

  function openDrawer() {
    $('#drawer-backdrop').hidden = false;
    $('#side-drawer').classList.add('is-open');
    $('#side-drawer').setAttribute('aria-hidden', 'false');
    $('#menu-toggle').setAttribute('aria-expanded', 'true');
    document.body.classList.add('drawer-open');
    $('#drawer-close').focus({ preventScroll: true });
  }

  function closeDrawer() {
    $('#side-drawer').classList.remove('is-open');
    $('#side-drawer').setAttribute('aria-hidden', 'true');
    $('#drawer-backdrop').hidden = true;
    $('#menu-toggle').setAttribute('aria-expanded', 'false');
    document.body.classList.remove('drawer-open');
  }

  function renderAdminPanel() {
    if (!loggedIn()) return;
    $('#admin-whatsapp').value = whatsappNumber();
    const host = $('#admin-products');
    host.innerHTML = catalogue.map((product, index) => {
      const edit = overrides.products?.[product.id] || {};
      const primaryPhoto = Number.isInteger(edit.primaryPhoto) ? edit.primaryPhoto : 0;
      const photos = product.photos.length ? `<label>Primary wall photo<select data-field="primaryPhoto">${product.photos.map((photo, photoIndex) => `<option value="${photoIndex}"${primaryPhoto === photoIndex ? ' selected' : ''}>Photo ${photoIndex + 1}</option>`).join('')}</select>` : '<p class="admin-small">This piece uses a typographic panel.</p>';
      return `<article class="admin-product${edit.hidden ? ' is-hidden' : ''}" data-product-id="${esc(product.id)}">
        <div class="admin-product-heading"><div><span class="eyebrow">${String(index + 1).padStart(2, '0')} / ${String(catalogue.length).padStart(2, '0')}</span><h3>${esc(product.title)}</h3></div><div class="admin-reorder"><button type="button" data-action="up" aria-label="Move ${esc(product.title)} up"${index === 0 ? ' disabled' : ''}>↑</button><button type="button" data-action="down" aria-label="Move ${esc(product.title)} down"${index === catalogue.length - 1 ? ' disabled' : ''}>↓</button></div></div>
        <div class="admin-product-grid"><label>Title<input data-field="title" type="text" value="${esc(edit.title ?? product.title)}" maxlength="160" required></label><label>Short line<input data-field="short" type="text" value="${esc(edit.short ?? product.short)}" maxlength="220"></label><label>Colour text<input data-field="colour" type="text" value="${esc(edit.colour ?? product.colour)}" maxlength="80"></label><label class="admin-full">Description<textarea data-field="description" rows="4" maxlength="1600">${esc(edit.description ?? product.description)}</textarea></label>${photos}</div>
        <div class="admin-product-footer"><label class="admin-toggle"><input data-field="hidden" type="checkbox"${edit.hidden === true ? ' checked' : ''}><span>Hide from wall and catalogue views</span></label><button class="admin-secondary" type="button" data-action="save">Apply changes</button></div>
      </article>`;
    }).join('');
  }

  function editProduct(id, input) {
    const product = catalogue.find(item => item.id === id);
    if (!product || !input) return;
    const field = input.dataset.field;
    if (!['hidden', 'primaryPhoto'].includes(field)) return;
    if (field === 'hidden') {
      if (input.checked && catalogue.filter(item => !overrides.products?.[item.id]?.hidden).length <= 1) {
        input.checked = false;
        setStatus('At least one product must remain visible on the wall.', true);
        return;
      }
      overrides.products[id] = { ...(overrides.products[id] || {}), hidden: input.checked };
    } else if (field === 'primaryPhoto') {
      const value = Number(input.value);
      if (!Number.isInteger(value) || value < 0 || value >= product.photos.length) return;
      overrides.products[id] = { ...(overrides.products[id] || {}), primaryPhoto: value };
    } else if (TEXT_FIELDS.includes(field)) {
      if (field === 'title' && !input.value.trim()) {
        setStatus('A product title cannot be empty.', true);
        return;
      }
      overrides.products[id] = { ...(overrides.products[id] || {}), [field]: input.value };
    } else return;
    if (saveOverrides()) {
      refreshPublic();
      renderAdminPanel();
      setStatus(`Applied changes to ${overrides.products[id]?.title || product.title}.`);
    }
  }

  function moveProduct(id, direction) {
    const order = catalogue.map(product => product.id);
    const index = order.indexOf(id);
    const next = index + direction;
    if (index < 0 || next < 0 || next >= order.length) return;
    [order[index], order[next]] = [order[next], order[index]];
    overrides.order = order;
    if (saveOverrides()) {
      refreshPublic();
      renderAdminPanel();
      setStatus('Wall order updated.');
    }
  }

  function exportChanges() {
    const effective = catalogue.map(product => {
      const copy = clone(product);
      copy.hidden = overrides.products?.[product.id]?.hidden === true;
      return copy;
    });
    const payload = { settings: { whatsapp: whatsappNumber() }, products: effective };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tisho-catalogue-export.json';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus('Export downloaded. Send the JSON file to your developer to make the changes permanent.');
  }

  window.TishoAdmin = {
    effectiveProducts,
    whatsappUrl,
    getCatalogue(defaults) {
      catalogue = clone(defaults);
      if (loggedIn() && $('#admin-view').classList.contains('is-open')) renderAdminPanel();
      return catalogue;
    },
    resetOverrides() {
      overrides = {};
      localStorage.removeItem(OVERRIDES_KEY);
      refreshPublic();
      renderAdminPanel();
    }
  };

  $('#menu-toggle').addEventListener('click', openDrawer);
  $('#drawer-close').addEventListener('click', () => { closeDrawer(); $('#menu-toggle').focus({ preventScroll: true }); });
  $('#drawer-backdrop').addEventListener('click', closeDrawer);
  $$('.drawer-nav a').forEach(link => link.addEventListener('click', closeDrawer));
  $('#admin-open').addEventListener('click', showAdmin);
  $('#admin-close').addEventListener('click', closeAdmin);
  $('#admin-back').addEventListener('click', event => { event.preventDefault(); closeAdmin(); });

  $('#admin-login-form').addEventListener('submit', async event => {
    event.preventDefault();
    const input = $('#admin-passcode');
    const error = $('#admin-login-error');
    const button = event.submitter;
    error.textContent = '';
    button.disabled = true;
    try {
      const expected = localStorage.getItem(PASSCODE_KEY) || INITIAL_HASH;
      const actual = await digest(input.value);
      if (actual !== expected) {
        error.textContent = 'Incorrect passcode. Please try again.';
        input.select();
        return;
      }
      sessionStorage.setItem(SESSION_KEY, 'authenticated');
      input.value = '';
      showAdmin();
    } catch {
      error.textContent = 'Secure hashing is unavailable in this browser context. Use HTTPS or localhost.';
    } finally {
      button.disabled = false;
    }
  });

  $('#admin-logout').addEventListener('click', () => {
    sessionStorage.removeItem(SESSION_KEY);
    showAdmin();
    setStatus('');
  });

  $('#admin-settings-form').addEventListener('submit', event => {
    event.preventDefault();
    const value = $('#admin-whatsapp').value.trim();
    if (!/^\d+$/.test(value)) {
      $('#admin-settings-error').textContent = 'Enter digits only, including the country code.';
      return;
    }
    overrides.whatsapp = value;
    $('#admin-settings-error').textContent = '';
    if (saveOverrides()) {
      refreshPublic();
      setStatus('WhatsApp number updated across every order link.');
    }
  });

  $('#admin-products').addEventListener('change', event => {
    const input = event.target.closest('[data-field="hidden"], [data-field="primaryPhoto"]');
    if (!input || !loggedIn()) return;
    editProduct(input.closest('.admin-product').dataset.productId, input);
  });

  $('#admin-products').addEventListener('click', event => {
    const button = event.target.closest('button[data-action]');
    if (!button || !loggedIn()) return;
    const card = button.closest('.admin-product');
    const id = card.dataset.productId;
    if (button.dataset.action === 'up' || button.dataset.action === 'down' || button.dataset.action === 'save') {
      const edits = {};
      $$('[data-field]', card).forEach(input => {
        const field = input.dataset.field;
        if (TEXT_FIELDS.includes(field)) edits[field] = input.value;
        if (field === 'primaryPhoto') edits.primaryPhoto = Number(input.value);
        if (field === 'hidden') edits.hidden = input.checked;
      });
      if (!edits.title?.trim()) { setStatus('A product title cannot be empty.', true); return; }
      if (edits.hidden && !overrides.products?.[id]?.hidden && catalogue.filter(item => !overrides.products?.[item.id]?.hidden).length <= 1) {
        setStatus('At least one product must remain visible on the wall.', true);
        return;
      }
      overrides.products = overrides.products && typeof overrides.products === 'object' && !Array.isArray(overrides.products) ? overrides.products : {};
      overrides.products[id] = { ...(overrides.products[id] || {}), ...edits };
    }
    if (button.dataset.action === 'up') moveProduct(id, -1);
    else if (button.dataset.action === 'down') moveProduct(id, 1);
    else if (button.dataset.action === 'save') {
      if (saveOverrides()) {
        refreshPublic();
        renderAdminPanel();
        setStatus(`Applied changes to ${overrides.products[id].title}.`);
      }
    }
  });

  $('#admin-passcode-form').addEventListener('submit', async event => {
    event.preventDefault();
    if (!loggedIn()) return;
    const value = $('#admin-new-passcode').value;
    const confirmation = $('#admin-confirm-passcode').value;
    const message = $('#admin-passcode-message');
    if (value.length < 4 || value !== confirmation) {
      message.textContent = 'Passcodes must match and contain at least 4 characters.';
      return;
    }
    try {
      localStorage.setItem(PASSCODE_KEY, await digest(value));
      $('#admin-new-passcode').value = '';
      $('#admin-confirm-passcode').value = '';
      message.textContent = 'Passcode hash updated for this browser.';
    } catch {
      message.textContent = 'Secure hashing is unavailable. The passcode was not changed.';
    }
  });

  $('#admin-export').addEventListener('click', () => { if (loggedIn()) exportChanges(); });
  $('#admin-reset').addEventListener('click', () => {
    if (!loggedIn() || !window.confirm('Clear all local catalogue and WhatsApp overrides and restore the built-in defaults?')) return;
    overrides = { products: {} };
    localStorage.removeItem(OVERRIDES_KEY);
    refreshPublic();
    renderAdminPanel();
    setStatus('Built-in catalogue and WhatsApp defaults restored.');
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && $('#side-drawer').classList.contains('is-open')) {
      closeDrawer();
      $('#menu-toggle').focus({ preventScroll: true });
    }
  });

  refreshWhatsAppLinks();
  if (loggedIn()) showAdmin();
})();
