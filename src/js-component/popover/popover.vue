<template>
	<div class="iuimPopover" @touchstart="toggle" :style="{display:wrapDipslay}">
		<slot></slot>
		<transition name="popover" mode="out-in" @enter="enter">
			<div class="iuimPopover-context" v-if="state">
				<div class="iuimPopover-backdrop" :style="{'z-index':initZindex}"></div>
				<div class="iuimPopover-content" :class="triangle" :style="position">{{template}}</div>
			</div>
		</transition>
	</div>
</template>

<script>
let getZindex = (function () {
	let zid = 9999;
	return function () {
		return zid++;
	}
})();

const posMap = {
	'top-left': () => {

	},
	'top-center': () => {

	},
	'top-right': () => {

	},
	'bottom-left': () => {

	},
	'bottom-center': () => {

	},
	'bottom-right': () => {

	}
};

export default {
	name: 'iuimPopover',
	props: {
		content: {
			type: String
		},
		scrollEl: {
			type: String,
			default: 'body'
		},
		arrow: {
			type: String,
			default: 'top-left'
		}
	},
	data() {
		return {
			state: false,
			initZindex: getZindex(),
			template: this.content,
			position: {},
			wrapDipslay: '',
			scroller: this.scrollEl,
			triangle: this.arrow
		}
	},
	methods: {
		toggle(event) {
			this.state = !this.state;
		},
		enter: function (el, next) {
			let selector = this.$el;
			let relativeElem = selector.children.length ? selector.children[0] : selector;
			let relativeElemMatrix = relativeElem.getBoundingClientRect();
			let scrollEl = this.scrollEl === 'body' ? document.body : document.querySelector(this.scrollEl);
			scrollEl = scrollEl || document.body;
			let scrollTop = scrollEl.scrollTop;
			let scrollLeft = scrollEl.scrollLeft;
			let top = scrollTop + relativeElemMatrix.top;
			let left = scrollLeft + relativeElemMatrix.left;

			this.position = {
				'left': left + 'px',
				'top': top + 'px',
				'z-index': getZindex()
			};
			next();
		}
	},
	mounted() {
		let selector = this.$el;
		let relativeElem = selector.children.length ? selector.children[0] : selector;
		this.wrapDipslay = window.getComputedStyle(relativeElem).getPropertyValue('display');
	}
}
</script>

<style lang="scss">
@import '~scss-kit';
.popover-enter-active {
	transition: opacity .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.popover-leave-active {
	transition: opacity .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.popover-enter,
.popover-leave-to {
	opacity: 0;
}

.iuimPopover-backdrop {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(#000, .5);
}

.iuimPopover-content {
	position: absolute;
	background-color: #fff;
	z-index: 10000;
	padding: rem(20);
	border-radius: rem(5);
	width: rem(400);
	white-space: normal;
	word-wrap: break-word;
	&.top-left:after {
		content: '';
		position: absolute;
		top: 100%;
		left: 10%;
		margin-top: -1px;
		@include triangle(rem(30), #fff transparent, down);
	}
	&.top-center:after {
		content: '';
		position: absolute;
		top: 100%;
		left: 10%;
		margin-top: -1px;
		@include triangle(rem(30), #fff transparent, down);
	}
	&.top-right:after {
		content: '';
		position: absolute;
		top: 100%;
		left: 10%;
		margin-top: -1px;
		@include triangle(rem(30), #fff transparent, down);
	}
	&.bottom-left:after {
		content: '';
		position: absolute;
		top: 100%;
		left: 10%;
		margin-top: -1px;
		@include triangle(rem(30), #fff transparent, down);
	}
	&.bottom-center:after {
		content: '';
		position: absolute;
		top: 100%;
		left: 10%;
		margin-top: -1px;
		@include triangle(rem(30), #fff transparent, down);
	}
	&.bottom-right:after {
		content: '';
		position: absolute;
		top: 100%;
		left: 10%;
		margin-top: -1px;
		@include triangle(rem(30), #fff transparent, down);
	}
}
</style>
