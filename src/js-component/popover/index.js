import popover from './popover.vue';

export default {
  install: function (Vue) {
    if (this.installed) return;
    Vue.component(popover);
  }
}

export const iuimPopover = popover;