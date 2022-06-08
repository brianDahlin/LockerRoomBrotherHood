exports.ids = [4];
exports.modules = {

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ZamboniContainer.vue?vue&type=template&id=0633d174&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ZamboniContainer"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ZamboniContainer.vue?vue&type=template&id=0633d174&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ZamboniContainer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var ZamboniContainervue_type_script_lang_js_ = ({
  name: 'ZamboniContainer',

  provide() {
    return {
      zamboniContainer: this.data
    };
  },

  data() {
    return {
      data: {
        height: 0,
        scrollFactor: 0,
        width: 0
      }
    };
  },

  mounted() {
    this.calcParallax(); // We're using a `requestAnimationFrame()`
    // for optimal performance.

    const eventHandler = () => requestAnimationFrame(this.calcParallax);

    window.addEventListener('resize', eventHandler);
    window.addEventListener('scroll', eventHandler); // Remove the scroll hanlder when the
    // component is destroyed.

    this.$on(`hook:destroyed`, () => {
      window.removeEventListener('resize', eventHandler);
      window.removeEventListener('scroll', eventHandler);
    });
  },

  methods: {
    calcParallax() {
      const containerRect = this.$el.getBoundingClientRect();
      this.data.height = containerRect.height;
      this.data.width = containerRect.width;
      const viewportOffsetTop = containerRect.top;
      const viewportOffsetBottom = window.innerHeight - viewportOffsetTop;
      this.data.scrollFactor = viewportOffsetBottom / (window.innerHeight + this.data.height);
    }

  }
});
// CONCATENATED MODULE: ./components/ZamboniContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ZamboniContainervue_type_script_lang_js_ = (ZamboniContainervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ZamboniContainer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ZamboniContainervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "517881ea"
  
)

/* harmony default export */ var ZamboniContainer = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=zamboni-container.js.map