import { initMixin } from './init'
import {initState, stateMixin} from './state'
import {initRender, renderMixin} from './render'
import {eventsMixin, initEvents} from './events'
import {callHook, initLifecycle, lifecycleMixin} from './lifecycle'
import { warn } from '../util/index'
import {initInjections, initProvide} from "./inject"

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

// mixin Vue.prototype

// prototype._init = options => if (option.el) $mount (/w\
//    initLifecycle
//    initEvents
//    initRender
//    callHook - beforeCreate
//    initInjections
//    initState
//    initProvide
//    callHook - created
//    if (option.el) $mount
initMixin(Vue)

// prototype.$data.get => vm._data
// prototype.$props.get => vm._props
// prototype.$set if (__ob__) { defineReactive() }
// prototype.$del
// prototype.$watch
stateMixin(Vue)

// prototype.$on
// prototype.$off
// prototype.$once
// prototype.$emit
eventsMixin(Vue)

// prototype._update
// prototype.$forceUpdate
// prototype.$destroy
// vm._watcher _inactive _directInactive _isMounted _isDestroyed _isBeingDestroyed = null
// init vm.$parent $root $children $refs
lifecycleMixin(Vue)

// prototype.renderHelpers
// prototype.$nextTick
// prototype._render
renderMixin(Vue)

export default Vue
