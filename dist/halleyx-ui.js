import { createElementBlock as e, openBlock as t, renderSlot as n } from "vue";
//#region \0plugin-vue:export-helper
var r = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, i = {}, a = { class: "btn" };
function o(r, i) {
	return t(), e("button", a, [n(r.$slots, "default")]);
}
var s = /* @__PURE__ */ r(i, [["render", o]]), c = { install(e) {
	e.component("MyButton", s);
} };
//#endregion
export { s as MyButton, c as default };
