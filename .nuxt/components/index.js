export const Cone = () => import('../..\\components\\Cone.vue' /* webpackChunkName: "components/cone" */).then(c => wrapFunctional(c.default || c))
export const FullscreenHero = () => import('../..\\components\\FullscreenHero.vue' /* webpackChunkName: "components/fullscreen-hero" */).then(c => wrapFunctional(c.default || c))
export const Prepic = () => import('../..\\components\\Prepic.vue' /* webpackChunkName: "components/prepic" */).then(c => wrapFunctional(c.default || c))
export const ZamboniContainer = () => import('../..\\components\\ZamboniContainer.vue' /* webpackChunkName: "components/zamboni-container" */).then(c => wrapFunctional(c.default || c))
export const ZamboniElement = () => import('../..\\components\\ZamboniElement.vue' /* webpackChunkName: "components/zamboni-element" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
