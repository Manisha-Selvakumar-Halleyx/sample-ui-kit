import { computed as e, createCommentVNode as t, createElementBlock as n, createElementVNode as r, defineComponent as i, openBlock as a, renderSlot as o, toDisplayString as s, vModelDynamic as c, withDirectives as l } from "vue";
//#region \0plugin-vue:export-helper
var u = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, d = {}, f = { class: "btn" };
function p(e, t) {
	return a(), n("button", f, [o(e.$slots, "default", {}, void 0, !0)]);
}
var m = /* @__PURE__ */ u(d, [["render", p], ["__scopeId", "data-v-7b0d616b"]]), h = { class: "textbox" }, g = {
	key: 0,
	class: "textbox-label"
}, _ = [
	"type",
	"placeholder",
	"disabled"
], v = {
	key: 1,
	class: "textbox-error"
}, y = /* @__PURE__ */ u(/* @__PURE__ */ i({
	__name: "MyTextBox",
	props: {
		modelValue: { default: "" },
		label: { default: "" },
		placeholder: { default: "" },
		type: { default: "text" },
		disabled: {
			type: Boolean,
			default: !1
		},
		error: { default: "" }
	},
	emits: ["update:modelValue"],
	setup(i, { emit: o }) {
		let u = i, d = o, f = e({
			get: () => u.modelValue,
			set: (e) => d("update:modelValue", e)
		});
		return (e, o) => (a(), n("div", h, [
			i.label ? (a(), n("label", g, s(i.label), 1)) : t("", !0),
			l(r("input", {
				class: "textbox-input",
				type: i.type,
				placeholder: i.placeholder,
				disabled: i.disabled,
				"onUpdate:modelValue": o[0] ||= (e) => f.value = e
			}, null, 8, _), [[c, f.value]]),
			i.error ? (a(), n("p", v, s(i.error), 1)) : t("", !0)
		]));
	}
}), [["__scopeId", "data-v-b1c34092"]]), b = {
	MyButton: m,
	TextBox: y
}, x = { install(e) {
	Object.entries(b).forEach(([t, n]) => {
		e.component(t, n);
	});
} };
//#endregion
export { m as MyButton, y as TextBox, x as default };
