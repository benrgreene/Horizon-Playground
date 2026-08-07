import { Component } from '@theme/component';

/**
 * A dismissible toast.
 *
 * Dismissal is remembered in sessionStorage keyed by the block id, because the toasts
 * section lives in the footer group and therefore renders on every page — without this,
 * a dismissed toast would reappear on the next navigation.
 *
 * In the theme editor the stored state is ignored, so a merchant always sees the toasts
 * they are editing rather than ones they dismissed while previewing.
 *
 * @extends {Component<{}>}
 */
export class ToastComponent extends Component {
  connectedCallback() {
    super.connectedCallback();
    this.#applyDismissedState();
  }

  /**
   * Re-applies dismissal after a Section Rendering API re-render replaces this subtree.
   * The server markup never carries the hidden attribute, so without this a re-render
   * would resurrect a dismissed toast.
   */
  updatedCallback() {
    super.updatedCallback?.();
    this.#applyDismissedState();
  }

  /** Bound declaratively from the block markup via `on:click="/dismiss"`. */
  dismiss() {
    this.hidden = true;

    const key = this.#storageKey();
    if (!key) return;

    try {
      sessionStorage.setItem(key, '1');
    } catch {
      // Private browsing or a full quota — dismissal still worked for this page view.
    }
  }

  #storageKey() {
    const id = this.dataset.toastKey;
    return id ? `toast-dismissed:${id}` : null;
  }

  #applyDismissedState() {
    if (window.Shopify?.designMode) return;

    const key = this.#storageKey();
    if (!key) return;

    try {
      if (sessionStorage.getItem(key) === '1') this.hidden = true;
    } catch {
      // Storage unavailable — leave the toast visible.
    }
  }
}

if (!customElements.get('toast-component')) {
  customElements.define('toast-component', ToastComponent);
}
