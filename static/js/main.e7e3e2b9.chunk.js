(window.webpackJsonp = window.webpackJsonp || []).push([[0], { 5400: function (e, t, a) { e.exports = a(5500) }, 5500: function (e, t, a) { "use strict"; a.r(t); var r = a(0), n = a.n(r), c = a(24), s = a.n(c), o = a(36), i = a(33), l = a(34), m = a(37), u = a(35), p = a(38), d = a(31), h = a.n(d), f = a(4), E = a(26), b = a.n(E), g = "FETCH_TEMPLATE_START", v = "FETCH_TEMPLATE_SUCCESS", y = "FETCH_TEMPLATE_FAIL", S = "FETCH_HOUSE_DATA_START", A = "FETCH_HOUSE_DATA_SUCCESS", j = "FETCH_HOUSE_DATA_FAIL"; var O = a(7), T = Object(f.withStyles)({ houseArea: { margin: "0.5rem", minHeight: "0.5rem" } })(function (e) { var t = e.classes, a = e.area; return n.a.createElement(O.f, { component: "p", className: t.houseArea }, a && "".concat(a, " sqr. ft.")) }), k = a(53), w = function (e) { function t() { var e, a; Object(i.a)(this, t); for (var r = arguments.length, n = new Array(r), c = 0; c < r; c++)n[c] = arguments[c]; return (a = Object(m.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(n)))).state = { currentImage: 0 }, a.handleNextClick = function () { var e = a.state.currentImage; e === a.props.src.length - 1 ? a.setState({ currentImage: 0 }) : a.setState({ currentImage: e + 1 }) }, a.handlePreviousClick = function () { var e = a.state.currentImage; 0 === e ? a.setState({ currentImage: a.props.src.length - 1 }) : a.setState({ currentImage: e - 1 }) }, a } return Object(p.a)(t, e), Object(l.a)(t, [{ key: "render", value: function () { var e = this.props, t = e.classes, a = e.insider, r = e.src, c = e.description; return n.a.createElement(O.c, { className: t.media, image: r[this.state.currentImage], title: c }, n.a.createElement("div", { className: t.children }, a.props.children), 1 !== r.length && n.a.createElement(n.a.Fragment, null, n.a.createElement(O.e, { className: t.previousWrapper, "aria-label": "Previous", onClick: this.handlePreviousClick }, n.a.createElement(k.a, { className: t.previousButton })), n.a.createElement(O.e, { className: t.nextWrapper, "aria-label": "Next", onClick: this.handleNextClick }, n.a.createElement(k.b, { className: t.nextButton })))) } }]), t }(r.Component), C = Object(f.withStyles)({ media: { height: "15rem" }, nextButton: { fontSize: "3rem", background: "rgba(255, 255, 255, 0.3)", borderRadius: "50%", color: "black" }, previousButton: { fontSize: "3rem", background: "rgba(255, 255, 255, 0.3)", borderRadius: "50%", color: "black" }, previousWrapper: { position: "absolute", top: 0, bottom: 0, left: 0, right: "18rem", borderRadius: 0 }, nextWrapper: { position: "absolute", top: 0, bottom: 0, left: "16.5rem", right: 0, borderRadius: 0 }, children: { display: "flex", flexDirection: "row-reverse", padding: "1rem 0.75rem" } })(w), x = Object(f.withStyles)({ housePrice: { fontWeight: "bold", margin: "0.5rem" }, inner: { fontSize: "1.5rem", padding: "0.5rem", background: "rgba(255, 255, 255, 0.4)", display: "inline", borderRadius: "1rem" } })(function (e) { var t = e.classes, a = e.price, r = e.inner; return n.a.createElement(O.f, { component: "p", className: r ? t.inner : t.housePrice }, a && "$".concat(a.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,"))) }), N = Object(f.withStyles)({ houseAddress: { padding: "0.5rem", height: "4rem", display: "flex", textAlign: "center", alignItems: "center" } })(function (e) { var t = e.classes, a = e.address; return n.a.createElement(O.f, { component: "p", className: t.houseAddress }, a && a) }); var I = Object(f.withStyles)({ card: { width: "21rem", position: "relative" } })(function (e) { var t = e.classes, a = e.data, r = e.template; return n.a.createElement(n.a.Fragment, null, n.a.createElement(O.d, { container: !0, justify: "center", className: t.houseWrapper }, n.a.createElement(O.a, null, n.a.createElement(O.b, null, r.map(function (e, r) { var c; return e.children && (c = e.children), n.a.createElement("div", { className: t.card, key: r }, "PRICE" === e.component && n.a.createElement(x, { price: a[e.field] }), "ADDRESS" === e.component && n.a.createElement(N, { address: a[e.field] }), "AREA" === e.component && n.a.createElement(T, { area: a[e.field] }), "IMAGE" === e.component && n.a.createElement(C, { description: a.description, src: a[e.field], insider: n.a.createElement("div", null, c && c.map(function (e, t) { return n.a.createElement("div", { key: t }, "ADDRESS" === e.component && n.a.createElement(N, { address: a[e.field] }), "PRICE" === e.component && n.a.createElement(x, { inner: !0, price: a[e.field] }), "AREA" === e.component && n.a.createElement(T, { area: a[e.field] })) })) })) }))))) }), _ = function (e) { function t() { return Object(i.a)(this, t), Object(m.a)(this, Object(u.a)(t).apply(this, arguments)) } return Object(p.a)(t, e), Object(l.a)(t, [{ key: "componentDidMount", value: function () { this.props.loadTemplate(), this.props.loadHousesData() } }, { key: "render", value: function () { var e = this.props, t = e.classes, a = e.templates, r = e.houses; return n.a.createElement("div", { className: t.container }, n.a.createElement(h.a, { variant: "h4", className: t.title }, "Main"), n.a.createElement(b.a, { container: !0, spacing: 32 }, a.response && r.response && r.response.data.map(function (e, t) { return n.a.createElement(b.a, { key: r.response.data[t].id, item: !0, lg: 4, md: 6, sm: 12, xs: 12 }, n.a.createElement(I, { template: a.response[2].template, data: r.response.data[t] })) }))) } }]), t }(r.Component), R = { loadTemplate: function () { return function (e) { e({ type: g }), fetch("https://demo4452328.mockable.io/templates").then(function (e) { if (e.status >= 400) throw new Error(e.statusText); return e.json() }).then(function (t) { return e({ type: v, payload: { response: t } }) }).catch(function (t) { e({ type: y, payload: { error: t } }) }) } }, loadHousesData: function () { return function (e) { e({ type: S }), fetch("https://demo4452328.mockable.io/properties").then(function (e) { if (e.status >= 400) throw new Error(e.statusText); return e.json() }).then(function (t) { return e({ type: A, payload: { response: t } }) }).catch(function (t) { e({ type: j, payload: { error: t } }) }) } } }, H = Object(o.b)(function (e) { return { templates: e.templates, houses: e.houses } }, R)(Object(f.withStyles)({ title: { margin: "2rem 0 2rem" }, container: { margin: "0 3rem" } })(_)), D = function () { return n.a.createElement(H, null) }, F = a(19), P = a(85), L = a(86), M = {}; var W = {}; var B = Object(P.createLogger)({ collapsed: !0 }), U = Object(F.c)({ templates: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M, t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case v: return t.payload; default: return e } }, houses: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W, t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case A: return t.payload; default: return e } } }); s.a.render(n.a.createElement(o.a, { store: Object(F.d)(U, Object(F.a)(L.a, B)) }, n.a.createElement(D, null)), document.getElementById("root")) } }, [[5400, 2, 1]]]);
//# sourceMappingURL=main.e7e3e2b9.chunk.js.map