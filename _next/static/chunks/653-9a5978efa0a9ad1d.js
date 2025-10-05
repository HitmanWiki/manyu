"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [653], {
        10: (t, e, r) => {
            r.d(e, {
                V: () => d,
                f: () => m
            });
            var i = r(4272);
            let n = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
            var s = r(614),
                o = r(1557);
            let a = "number",
                l = "color",
                u = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

            function d(t) {
                let e = t.toString(),
                    r = [],
                    n = {
                        color: [],
                        number: [],
                        var: []
                    },
                    s = [],
                    o = 0,
                    d = e.replace(u, t => (i.y.test(t) ? (n.color.push(o), s.push(l), r.push(i.y.parse(t))) : t.startsWith("var(") ? (n.var.push(o), s.push("var"), r.push(t)) : (n.number.push(o), s.push(a), r.push(parseFloat(t))), ++o, "${}")).split("${}");
                return {
                    values: r,
                    split: d,
                    indexes: n,
                    types: s
                }
            }

            function h(t) {
                return d(t).values
            }

            function c(t) {
                let {
                    split: e,
                    types: r
                } = d(t), n = e.length;
                return t => {
                    let s = "";
                    for (let u = 0; u < n; u++)
                        if (s += e[u], void 0 !== t[u]) {
                            let e = r[u];
                            e === a ? s += (0, o.a)(t[u]) : e === l ? s += i.y.transform(t[u]) : s += t[u]
                        }
                    return s
                }
            }
            let p = t => "number" == typeof t ? 0 : i.y.test(t) ? i.y.getAnimatableNone(t) : t,
                m = {
                    test: function (t) {
                        return isNaN(t) && "string" == typeof t &&
                            ((t.match(s.S) || []).length + (t.match(n) || []).length) > 0
                    },
                    parse: h,
                    createTransformer: c,
                    getAnimatableNone: function (t) {
                        let e = h(t);
                        return c(t)(e.map(p))
                    }
                }
        },
        18: (t, e, r) => {
            r.d(e, {
                U: () => i,
                f: () => n
            });
            let i = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                n = new Set(i)
        },
        98: (t, e, r) => {
            r.d(e, {
                OQ: () => d
            });
            var i = r(5626),
                n = r(2923),
                s = r(4261),
                o = r(9515);
            let a = t => !isNaN(parseFloat(t)),
                l = {
                    current: void 0
                };
            class u {
                constructor(t, e = {}) {
                    this.canTrackVelocity = null,
                        this.events = {},
                        this.updateAndNotify = t => {
                            let e = s.k.now();
                            if (this.updatedAt !== e && this.setPrevFrameValue(),
                                this.prev = this.current,
                                this.setCurrent(t),
                                this.current !== this.prev &&
                                (this.events.change?.notify(this.current),
                                    this.dependents))
                                for (let t of this.dependents) t.dirty()
                        },
                        this.hasAnimated = !1,
                        this.setCurrent(t),
                        this.owner = e.owner
                }
                setCurrent(t) {
                    this.current = t, this.updatedAt = s.k.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = a(this.current))
                }
                setPrevFrameValue(t = this.current) {
                    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new i.v);
                    let r = this.events[t].add(e);
                    return "change" === t ? () => {
                        r(), o.Gt.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : r
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t) {
                    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
                }
                setWithVelocity(t, e, r) {
                    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
                }
                jump(t, e = !0) {
                    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                dirty() {
                    this.events.change?.notify(this.current)
                }
                addDependent(t) {
                    this.dependents || (this.dependents = new Set), this.dependents.add(t)
                }
                removeDependent(t) {
                    this.dependents && this.dependents.delete(t)
                }
                get() {
                    return l.current && l.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    let t = s.k.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
                    let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return (0, n.f)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.dependents?.clear();
                    this.events.destroy?.notify();
                    this.clearListeners();
                    this.stop();
                    this.stopPassiveEffect && this.stopPassiveEffect();
                }
            }

            function d(t, e) {
                return new u(t, e)
            }
        },
        280: (t, e, r) => {
            r.d(e, {
                E4: () => a,
                Hr: () => h,
                W9: () => d
            });
            var i = r(4160),
                n = r(18),
                s = r(7887),
                o = r(4158);
            let a = t => t === s.ai || t === o.px,
                l = new Set(["x", "y", "z"]),
                u = n.U.filter(t => !l.has(t));

            function d(t) {
                let e = [];
                return u.forEach(r => {
                    let i = t.getValue(r);
                    void 0 !== i && (e.push([r, i.get()]), i.set(+!!r.startsWith("scale")))
                }), e
            }
            let h = {
                width: ({
                    x: t
                }, {
                    paddingLeft: e = "0",
                    paddingRight: r = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(r),
                height: ({
                    y: t
                }, {
                    paddingTop: e = "0",
                    paddingBottom: r = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(r),
                top: (t, {
                    top: e
                }) => parseFloat(e),
                left: (t, {
                    left: e
                }) => parseFloat(e),
                bottom: ({
                    y: t
                }, {
                    top: e
                }) => parseFloat(e) + (t.max - t.min),
                right: ({
                    x: t
                }, {
                    left: e
                }) => parseFloat(e) + (t.max - t.min),
                x: (t, {
                    transform: e
                }) => (0, i.ry)(e, "x"),
                y: (t, {
                    transform: e
                }) => (0, i.ry)(e, "y")
            };
            h.translateX = h.x, h.translateY = h.y
        },
        419: (t, e, r) => {
            r.d(e, {
                K: () => n
            });
            var i = r(2735);

            function n(t, e, r) {
                let n = t.getProps();
                return (0, i.a)(n, e, void 0 !== r ? r : n.custom, t)
            }
        },
        600: (t, e, r) => {
            r.d(e, {
                e: () => i
            });

            function i(t, {
                style: e,
                vars: r
            }, i, n) {
                let s, o = t.style;
                for (s in e) o[s] = e[s];
                for (s in n?.applyProjectionStyles(o, i), r) o.setProperty(s, r[s])
            }
        },
        614: (t, e, r) => {
            r.d(e, {
                S: () => i
            });
            let i = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
        },
        637: (t, e, r) => {
            r.d(e, {
                $: () => s,
                H: () => n
            });
            var i = r(8606);
            let n = {};

            function s(t) {
                for (let e in t) n[e] = t[e], (0, i.j)(e) && (n[e].isCSSVariable = !0)
            }
        },
        728: (t, e, r) => {
            r.d(e, {
                l: () => p
            });
            var i = r(18),
                n = r(1834),
                s = r(1786),
                o = r(5193),
                a = r(8450),
                l = r(2076);
            let u = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
            var d = r(3095),
                h = r(600),
                c = r(4527);
            class p extends o.b {
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = s.ge
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (i.f.has(e)) {
                        let t = (0, n.D)(e);
                        return t && t.default || 0
                    }
                    return e = u.has(e) ? e : (0, a.I)(e), t.getAttribute(e)
                }
                scrapeMotionValuesFromProps(t, e, r) {
                    return (0, c.x)(t, e, r)
                }
                build(t, e, r) {
                    (0, l.B)(t, e, this.isSVGTag, r.transformTemplate, r.style)
                }
                renderInstance(t, e, r, i) {
                    for (let r in (0, h.e)(t, e, void 0, i), e.attrs) t.setAttribute(u.has(r) ? r : (0, a.I)(r), e.attrs[r])
                }
                mount(t) {
                    this.isSVGTag = (0, d.n)(t.tagName), super.mount(t)
                }
            }
        },
        845: (t, e, r) => {
            r.d(e, {
                t: () => i
            });
            let i = (0, r(2115).createContext)(null)
        },
        869: (t, e, r) => {
            r.d(e, {
                L: () => i
            });
            let i = (0, r(2115).createContext)({})
        },
        901: (t, e, r) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "RouterContext", {
                enumerable: !0,
                get: function () {
                    return i
                }
            });
            let i = r(8466)._(r(2115)).default.createContext(null)
        },
        1081: (t, e, r) => {
            r.d(e, {
                h: () => i
            });
            let i = t => Array.isArray(t) && "number" != typeof t[0]
        },
        1154: (t, e, r) => {
            r.d(e, {
                A: () => i
            });
            let i = (0, r(9946).A)("loader-circle", [
                ["path", {
                    d: "M21 12a9 9 0 1 1-6.219-8.56",
                    key: "13zald"
                }]
            ])
        },
        1193: (t, e) => {
            function r(t) {
                var e;
                let {
                    config: r,
                    src: i,
                    width: n,
                    quality: s
                } = t, o = s || (null == (e = r.qualities) ? void 0 : e.reduce((t, e) => Math.abs(e - 75) < Math.abs(t - 75) ? e : t)) || 75;
                return r.path + "?url=" + encodeURIComponent(i) + "&w=" + n + "&q=" + o + (i.startsWith("/_next/static/media/") && 1 ? "&dpl=dpl_27wsYPmqX1ycJWVW6ewi7QWTtbAE" : "")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function () {
                    return i
                }
            }), r.__next_img_default = !0;
            let i = r
        },
        1297: (t, e, r) => {
            r.d(e, {
                q: () => i
            });
            let i = (t, e, r) => r > e ? e : r < t ? t : r
        },
        1335: (t, e, r) => {
            r.d(e, {
                u: () => n
            });
            var i = r(9064);
            let n = {
                test: (0, r(5920).$)("#"),
                parse: function (t) {
                    let e = "",
                        r = "",
                        i = "",
                        n = "";
                    return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), i = t.substring(5, 7), n = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), i = t.substring(3, 4), n = t.substring(4, 5), e += e, r += r, i += i, n += n), {
                        red: parseInt(e, 16),
                        green: parseInt(r, 16),
                        blue: parseInt(i, 16),
                        alpha: n ? parseInt(n, 16) / 255 : 1
                    }
                },
                transform: i.B.transform
            }
        },
        1469: (t, e, r) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), ! function (t, e) {
                for (var r in e) Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
            }(e, {
                default: function () {
                    return l
                },
                getImageProps: function () {
                    return a
                }
            });
            let i = r(8466),
                n = r(8883),
                s = r(3063),
                o = i._(r(1193));

            function a(t) {
                let {
                    props: e
                } = (0, n.getImgProps)(t, {
                    defaultLoader: o.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1
                    }
                });
                for (let [t, r] of Object.entries(e)) void 0 === r && delete e[t];
                return {
                    props: e
                }
            }
            let l = s.Image
        },
        1508: (t, e, r) => {
            r.d(e, {
                Q: () => i
            });
            let i = (0, r(2115).createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        1557: (t, e, r) => {
            r.d(e, {
                a: () => i
            });
            let i = t => Math.round(1e5 * t) / 1e5
        },
        1765: (t, e, r) => {
            r.d(e, {
                V: () => i
            });
            let i = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
        },
        1786: (t, e, r) => {
            r.d(e, {
                ge: () => o,
                xU: () => n
            });
            let i = () => ({
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            }),
                n = () => ({
                    x: i(),
                    y: i()
                }),
                s = () => ({
                    min: 0,
                    max: 0
                }),
                o = () => ({
                    x: s(),
                    y: s()
                })
        },
        1788: (t, e, r) => {
            r.d(e, {
                n: () => i
            });
            let i = "data-" + (0, r(8450).I)("framerAppearId")
        },
        1834: (t, e, r) => {
            r.d(e, {
                D: () => o
            });
            var i = r(4272),
                n = r(2171);
            let s = {
                ...r(2403).W,
                color: i.y,
                backgroundColor: i.y,
                outlineColor: i.y,
                fill: i.y,
                stroke: i.y,
                borderColor: i.y,
                borderTopColor: i.y,
                borderRightColor: i.y,
                borderBottomColor: i.y,
                borderLeftColor: i.y,
                filter: n.p,
                WebkitFilter: n.p
            },
                o = t => s[t]
        },
        2017: (t, e, r) => {
            r.d(e, {
                f: () => s
            });
            var i = r(5818),
                n = r(3210);

            function s(t, e) {
                let r = t[t.length - 1];
                for (let s = 1; s <= e; s++) {
                    let o = (0, i.q)(0, e, s);
                    t.push((0, n.k)(r, 1, o))
                }
            }
        },
        2039: (t, e, r) => {
            r.d(e, {
                a6: () => n,
                am: () => o,
                vT: () => s
            });
            var i = r(2483);
            let n = (0, i.A)(.42, 0, 1, 1),
                s = (0, i.A)(0, 0, .58, 1),
                o = (0, i.A)(.42, 0, .58, 1)
        },
        2076: (t, e, r) => {
            r.d(e, {
                B: () => a
            });
            var i = r(7684),
                n = r(4158);
            let s = {
                offset: "stroke-dashoffset",
                array: "stroke-dasharray"
            },
                o = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function a(t, {
                attrX: e,
                attrY: r,
                attrScale: a,
                pathLength: l,
                pathSpacing: u = 1,
                pathOffset: d = 0,
                ...h
            }, c, p, m) {
                if ((0, i.O)(t, h, p), c) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: f,
                    style: g
                } = t;
                f.transform && (g.transform = f.transform, delete f.transform),
                    (g.transform || f.transformOrigin) && (g.transformOrigin = f.transformOrigin ?? "50% 50%", delete f.transformOrigin),
                    g.transform && (g.transformBox = m?.transformBox ?? "fill-box", delete f.transformBox),
                    void 0 !== e && (f.x = e),
                    void 0 !== r && (f.y = r),
                    void 0 !== a && (f.scale = a),
                    void 0 !== l && function (t, e, r = 1, i = 0, a = !0) {
                        t.pathLength = 1;
                        let l = a ? s : o;
                        t[l.offset] = n.px.transform(-i);
                        let u = n.px.transform(e),
                            d = n.px.transform(r);
                        t[l.array] = `${u} ${d}`
                    }(f, l, u, d, !1)
            }
        },
        2082: (t, e, r) => {
            r.d(e, {
                xQ: () => s
            });
            var i = r(2115),
                n = r(845);

            function s(t = !0) {
                let e = (0, i.useContext)(n.t);
                if (null === e) return [!0, null];
                let {
                    isPresent: r,
                    onExitComplete: o,
                    register: a
                } = e, l = (0, i.useId)();
                (0, i.useEffect)(() => {
                    if (t) return a(l)
                }, [t]);
                let u = (0, i.useCallback)(() => t && o && o(l), [l, o, t]);
                return !r && o ? [!1, u] : [!0]
            }
        },
        2085: (t, e, r) => {
            r.d(e, {
                F: () => o
            });
            var i = r(2596);
            let n = t => "boolean" == typeof t ? `${t}` : 0 === t ? "0" : t,
                s = i.$,
                o = (t, e) => r => {
                    var i;
                    if ((null == e ? void 0 : e.variants) == null) return s(t, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
                    let {
                        variants: o,
                        defaultVariants: a
                    } = e, l = Object.keys(o).map(t => {
                        let e = null == r ? void 0 : r[t],
                            i = null == a ? void 0 : a[t];
                        if (null === e) return null;
                        let s = n(e) || n(i);
                        return o[t][s]
                    }), u = r && Object.entries(r).reduce((t, e) => {
                        let [r, i] = e;
                        return void 0 === i || (t[r] = i), t
                    }, {});
                    return s(t, l, null == e || null == (i = e.compoundVariants) ? void 0 : i.reduce((t, e) => {
                        let {
                            class: r,
                            className: i,
                            ...n
                        } = e;
                        return Object.entries(n).every(t => {
                            let [e, r] = t;
                            return Array.isArray(r) ? r.includes({
                                ...a,
                                ...u
                            }[e]) : ({
                                ...a,
                                ...u
                            })[e] === r
                        }) ? [...t, r, i] : t
                    }, []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
                }
        },
        2171: (t, e, r) => {
            r.d(e, {
                p: () => l
            });
            var i = r(10),
                n = r(614);
            let s = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function o(t) {
                let [e, r] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [i] = r.match(n.S) || [];
                if (!i) return t;
                let o = r.replace(i, ""),
                    a = +!!s.has(e);
                return i !== r && (a *= 100), e + "(" + a + o + ")"
            }
            let a = /\b([a-z-]*)\(.*?\)/gu,
                l = {
                    ...i.f,
                    getAnimatableNone: t => {
                        let e = t.match(a);
                        return e ? e.map(o).join(" ") : t
                    }
                }
        },
        2198: (t, e, r) => {
            r.d(e, {
                K: () => i
            });

            function i(t, e, r) {
                if (t instanceof EventTarget) return [t];
                if ("string" == typeof t) {
                    let i = document;
                    e && (i = e.current);
                    let n = r?.[t] ?? i.querySelectorAll(t);
                    return n ? Array.from(n) : []
                }
                return Array.from(t)
            }
        },
        2403: (t, e, r) => {
            r.d(e, {
                W: () => a
            });
            var i = r(7887);
            let n = {
                ...i.ai,
                transform: Math.round
            };
            var s = r(4158);
            let o = {
                rotate: s.uj,
                rotateX: s.uj,
                rotateY: s.uj,
                rotateZ: s.uj,
                scale: i.hs,
                scaleX: i.hs,
                scaleY: i.hs,
                scaleZ: i.hs,
                skew: s.uj,
                skewX: s.uj,
                skewY: s.uj,
                distance: s.px,
                translateX: s.px,
                translateY: s.px,
                translateZ: s.px,
                x: s.px,
                y: s.px,
                z: s.px,
                perspective: s.px,
                transformPerspective: s.px,
                opacity: i.X4,
                originX: s.gQ,
                originY: s.gQ,
                originZ: s.px
            },
                a = {
                    borderWidth: s.px,
                    borderTopWidth: s.px,
                    borderRightWidth: s.px,
                    borderBottomWidth: s.px,
                    borderLeftWidth: s.px,
                    borderRadius: s.px,
                    radius: s.px,
                    borderTopLeftRadius: s.px,
                    borderTopRightRadius: s.px,
                    borderBottomRightRadius: s.px,
                    borderBottomLeftRadius: s.px,
                    width: s.px,
                    maxWidth: s.px,
                    height: s.px,
                    maxHeight: s.px,
                    top: s.px,
                    right: s.px,
                    bottom: s.px,
                    left: s.px,
                    padding: s.px,
                    paddingTop: s.px,
                    paddingRight: s.px,
                    paddingBottom: s.px,
                    paddingLeft: s.px,
                    margin: s.px,
                    marginTop: s.px,
                    marginRight: s.px,
                    marginBottom: s.px,
                    marginLeft: s.px,
                    backgroundPositionX: s.px,
                    backgroundPositionY: s.px,
                    ...o,
                    zIndex: n,
                    fillOpacity: i.X4,
                    strokeOpacity: i.X4,
                    numOctaves: n
                }
        },
        2458: (t, e, r) => {
            r.d(e, {
                Y: () => i,
                t: () => n
            });
            let i = 2e4;

            function n(t) {
                let e = 0,
                    r = t.next(e);
                for (; !r.done && e < i;) e += 50, r = t.next(e);
                return e >= i ? 1 / 0 : e
            }
        },
        2464: (t, e, r) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "AmpStateContext", {
                enumerable: !0,
                get: function () {
                    return i
                }
            });
            let i = r(8466)._(r(2115)).default.createContext({})
        },
        2483: (t, e, r) => {
            r.d(e, {
                A: () => s
            });
            var i = r(9827);
            let n = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;

            function s(t, e, r, s) {
                if (t === e && r === s) return i.l;
                let o = e => (function (t, e, r, i, s) {
                    let o, a, l = 0;
                    do (o = n(a = e + (r - e) / 2, i, s) - t) > 0 ? r = a : e = a; while (Math.abs(o) > 1e-7 && ++l < 12);
                    return a
                })(e, 0, 1, t, r);
                return t => 0 === t || 1 === t ? t : n(o(t), e, s)
            }
        },
        2596: (t, e, r) => {
            r.d(e, {
                $: () => i
            });

            function i() {
                for (var t, e, r = 0, i = "", n = arguments.length; r < n; r++)(t = arguments[r]) && (e = function t(e) {
                    var r, i, n = "";
                    if ("string" == typeof e || "number" == typeof e) n += e;
                    else if ("object" == typeof e)
                        if (Array.isArray(e)) {
                            var s = e.length;
                            for (r = 0; r < s; r++) e[r] && (i = t(e[r])) && (n && (n += " "), n += i)
                        } else
                            for (i in e) e[i] && (n && (n += " "), n += i);
                    return n
                }(t)) && (i && (i += " "), i += e);
                return i
            }
        },
        2662: (t, e, r) => {
            function i(t) {
                return void 0 === t || 1 === t
            }

            function n({
                scale: t,
                scaleX: e,
                scaleY: r
            }) {
                return !i(t) || !i(e) || !i(r)
            }

            function s(t) {
                return n(t) || o(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
            }

            function o(t) {
                var e, r;
                return (e = t.x) && "0%" !== e || (r = t.y) && "0%" !== r
            }
            r.d(e, {
                HD: () => s,
                vF: () => o,
                vk: () => n
            })
        },
        2664: (t, e, r) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isLocalURL", {
                enumerable: !0,
                get: function () {
                    return s
                }
            });
            let i = r(9991),
                n = r(7102);

            function s(t) {
                if (!(0, i.isAbsoluteUrl)(t)) return !0;
                try {
                    let e = (0, i.getLocationOrigin)(),
                        r = new URL(t, e);
                    return r.origin === e && (0, n.hasBasePath)(r.pathname)
                } catch (t) {
                    return !1
                }
            }
        },
        2735: (t, e, r) => {
            function i(t) {
                let e = [{}, {}];
                return t?.values.forEach((t, r) => {
                    e[0][r] = t.get(), e[1][r] = t.getVelocity()
                }), e
            }

            function n(t, e, r, n) {
                if ("function" == typeof e) {
                    let [s, o] = i(n);
                    e = e(void 0 !== r ? r : t.custom, s, o)
                }
                if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
                    let [s, o] = i(n);
                    e = e(void 0 !== r ? r : t.custom, s, o)
                }
                return e
            }
            r.d(e, {
                a: () => n
            })
        },
        2757: (t, e, r) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), ! function (t, e) {
                for (var r in e) Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
            }(e, {
                formatUrl: function () {
                    return s
                },
                formatWithValidation: function () {
                    return a
                },
                urlObjectKeys: function () {
                    return o
                }
            });
            let i = r(3011)._(r(8859)),
                n = /https?|ftp|gopher|file/;

            function s(t) {
                let {
                    auth: e,
                    hostname: r
                } = t, s = t.protocol || "", o = t.pathname || "", a = t.hash || "", l = t.query || "", u = !1;
                e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : "", t.host ? u = e + t.host : r && (u = e + (~r.indexOf(":") ? "[" + r + "]" : r), t.port && (u += ":" + t.port)), l && "object" == typeof l && (l = String(i.urlQueryToSearchParams(l)));
                let d = t.search || l && "?" + l || "";
                return s && !s.endsWith(":") && (s += ":"), t.slashes || (!s || n.test(s)) && !1 !== u ? (u = "//" + (u || ""), o && "/" !== o[0] && (o = "/" + o)) : u || (u = ""), a && "#" !== a[0] && (a = "#" + a), d && "?" !== d[0] && (d = "?" + d), "" + s + u + (o = o.replace(/[?#]/g, encodeURIComponent)) + (d = d.replace("#", "%23")) + a
            }
            let o = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

            function a(t) {
                return s(t)
            }
        },
        2885: (t, e, r) => {
            r.d(e, {
                M: () => n
            });
            var i = r(2115);

            function n(t) {
                let e = (0, i.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        2923: (t, e, r) => {
            r.d(e, {
                f: () => i
            });

            function i(t, e) {
                return e ? 1e3 / e * t : 0
            }
        },
        3014: (t, e, r) => {
            r.d(e, {
                i: () => i
            });
            let i = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
        },
        3055: (t, e, r) => {
            r.d(e, {
                z: () => s
            });
            var i = r(18),
                n = r(637);

            function s(t, {
                layout: e,
                layoutId: r
            }) {
                return i.f.has(t) || t.startsWith("origin") || (e || void 0 !== r) && (!!n.H[t] || "opacity" === t)
            }
        },
        3063: (t, e, r) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "Image", {
                enumerable: !0,
                get: function () {
                    return x
                }
            });
            let i = r(8466),
                n = r(3011),
                s = r(5155),
                o = n._(r(2115)),
                a = i._(r(7650)),
                l = i._(r(5564)),
                u = r(8883),
                d = r(5840),
                h = r(6752);
            r(3230);
            let c = r(901),
                p = i._(r(1193)),
                m = r(6654),
                f = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function g(t, e, r, i, n, s, o) {
                let a = null == t ? void 0 : t.src;
                t && t["data-loaded-src"] !== a && (t["data-loaded-src"] = a, ("decode" in t ? t.decode() : Promise.resolve()).catch(() => { }).then(() => {
                    if (t.parentElement && t.isConnected) {
                        if ("empty" !== e && n(!0), null == r ? void 0 : r.current) {
                            let e = new Event("load");
                            Object.defineProperty(e, "target", {
                                writable: !1,
                                value: t
                            });
                            let i = !1,
                                n = !1;
                            r.current({
                                ...e,
                                nativeEvent: e,
                                currentTarget: t,
                                target: t,
                                isDefaultPrevented: () => i,
                                isPropagationStopped: () => n,
                                persist: () => { },
                                preventDefault: () => {
                                    i = !0, e.preventDefault()
                                },
                                stopPropagation: () => {
                                    n = !0, e.stopPropagation()
                                }
                            })
                        } (null == i ? void 0 : i.current) && i.current(t)
                    }
                }))
            }

            function v(t) {
                return o.use ? {
                    fetchPriority: t
                } : {
                    fetchpriority: t
                }
            }
            let y = (0, o.forwardRef)((t, e) => {
                let {
                    src: r,
                    srcSet: i,
                    sizes: n,
                    height: a,
                    width: l,
                    decoding: u,
                    className: d,
                    style: h,
                    fetchPriority: c,
                    placeholder: p,
                    loading: f,
                    unoptimized: y,
                    fill: b,
                    onLoadRef: x,
                    onLoadingCompleteRef: w,
                    setBlurComplete: k,
                    setShowAltText: P,
                    sizesInput: S,
                    onLoad: T,
                    onError: A,
                    ...E
                } = t, M = (0, o.useCallback)(t => {
                    t && (A && (t.src = t.src), t.complete && g(t, p, x, w, k, y, S))
                }, [r, p, x, w, k, A, y, S]), C = (0, m.useMergedRef)(e, M);
                return (0, s.jsx)("img", {
                    ...E,
                    ...v(c),
                    loading: f,
                    width: l,
                    height: a,
                    decoding: u,
                    "data-nimg": b ? "fill" : "1",
                    className: d,
                    style: h,
                    sizes: n,
                    srcSet: i,
                    src: r,
                    ref: C,
                    onLoad: t => {
                        g(t.currentTarget, p, x, w, k, y, S)
                    },
                    onError: t => {
                        P(!0), "empty" !== p && k(!0), A && A(t)
                    }
                })
            });

            function b(t) {
                let {
                    isAppRouter: e,
                    imgAttributes: r
                } = t, i = {
                    as: "image",
                    imageSrcSet: r.srcSet,
                    imageSizes: r.sizes,
                    crossOrigin: r.crossOrigin,
                    referrerPolicy: r.referrerPolicy,
                    ...v(r.fetchPriority)
                };
                return e && a.default.preload ? (a.default.preload(r.src, i), null) : (0, s.jsx)(l.default, {
                    children: (0, s.jsx)("link", {
                        rel: "preload",
                        href: r.srcSet ? void 0 : r.src,
                        ...i
                    }, "__nimg-" + r.src + r.srcSet + r.sizes)
                })
            }
            let x = (0, o.forwardRef)((t, e) => {
                let r = (0, o.useContext)(c.RouterContext),
                    i = (0, o.useContext)(h.ImageConfigContext),
                    n = (0, o.useMemo)(() => {
                        var t;
                        let e = f || i || d.imageConfigDefault,
                            r = [...e.deviceSizes, ...e.imageSizes].sort((t, e) => t - e),
                            n = e.deviceSizes.sort((t, e) => t - e),
                            s = null == (t = e.qualities) ? void 0 : t.sort((t, e) => t - e);
                        return {
                            ...e,
                            allSizes: r,
                            deviceSizes: n,
                            qualities: s
                        }
                    }, [i]),
                    {
                        onLoad: a,
                        onLoadingComplete: l
                    } = t,
                    m = (0, o.useRef)(a);
                (0, o.useEffect)(() => {
                    m.current = a
                }, [a]);
                let g = (0, o.useRef)(l);
                (0, o.useEffect)(() => {
                    g.current = l
                }, [l]);
                let [v, x] = (0, o.useState)(!1), [w, k] = (0, o.useState)(!1), {
                    props: P,
                    meta: S
                } = (0, u.getImgProps)(t, {
                    defaultLoader: p.default,
                    imgConf: n,
                    blurComplete: v,
                    showAltText: w
                });
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(y, {
                        ...P,
                        unoptimized: S.unoptimized,
                        placeholder: S.placeholder,
                        fill: S.fill,
                        onLoadRef: m,
                        onLoadingCompleteRef: g,
                        setBlurComplete: x,
                        setShowAltText: k,
                        sizesInput: t.sizes,
                        ref: e
                    }), S.priority ? (0, s.jsx)(b, {
                        isAppRouter: !r,
                        imgAttributes: P
                    }) : null]
                })
            });
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        3095: (t, e, r) => {
            r.d(e, {
                n: () => i
            });
            let i = t => "string" == typeof t && "svg" === t.toLowerCase()
        },
        3128: (t, e, r) => {
            r.d(e, {
                W: () => i
            });

            function i(t) {
                return "function" == typeof t && "applyToOptions" in t
            }
        },
        3180: (t, e) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "errorOnce", {
                enumerable: !0,
                get: function () {
                    return r
                }
            });
            let r = t => { }
        },
        3191: (t, e, r) => {
            r.d(e, {
                F: () => n
            });
            let i = (t, e) => r => e(t(r)),
                n = (...t) => t.reduce(i)
        },
        3210: (t, e, r) => {
            r.d(e, {
                k: () => i
            });
            let i = (t, e, r) => t + (e - t) * r
        },
        3387: (t, e, r) => {
            r.d(e, {
                W: () => i
            });
            let i = {}
        },
        3522: (t, e, r) => {
            r.d(e, {
                w: () => i
            });
            let i = t => e => e.test(t)
        },
        3562: (t, e, r) => {
            r.d(e, {
                B: () => C
            });
            var i = r(7322),
                n = r(4261),
                s = r(9515),
                o = r(4803),
                a = r(18),
                l = r(98),
                u = r(4272),
                d = r(10),
                h = r(4050),
                c = r(3522);
            let p = [...h.T, u.y, d.f],
                m = t => p.find((0, c.w)(t));
            var f = r(7277),
                g = r(7123),
                v = r(3014),
                y = r(7312),
                b = r(5626),
                x = r(6642),
                w = r(1786),
                k = r(8972);
            let P = {
                current: null
            },
                S = {
                    current: !1
                };
            var T = r(5511),
                A = r(9253),
                E = r(2735);
            let M = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class C {
                scrapeMotionValuesFromProps(t, e, r) {
                    return {}
                }
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: r,
                    reducedMotionConfig: a,
                    blockInitialAnimation: l,
                    visualState: u
                }, d = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = i.h, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                        let t = n.k.now();
                        this.renderScheduledAt < t && (this.renderScheduledAt = t, s.Gt.render(this.render, !1, !0))
                    };
                    let {
                        latestValues: h,
                        renderState: c
                    } = u;
                    this.latestValues = h, this.baseTarget = {
                        ...h
                    }, this.initialValues = e.initial ? {
                        ...h
                    } : {}, this.renderState = c, this.parent = t, this.props = e, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = a, this.options = d, this.blockInitialAnimation = !!l, this.isControllingVariants = (0, A.e)(e), this.isVariantNode = (0, A.O)(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: p,
                        ...m
                    } = this.scrapeMotionValuesFromProps(e, {}, this);
                    for (let t in m) {
                        let e = m[t];
                        void 0 !== h[t] && (0, o.S)(e) && e.set(h[t])
                    }
                }
                mount(t) {
                    this.current = t, T.C.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), S.current || function () {
                        if (S.current = !0, k.B)
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => P.current = t.matches;
                                t.addEventListener("change", e), e()
                            } else P.current = !1
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || P.current), this.parent?.addChild(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in this.projection && this.projection.unmount(), (0, s.WG)(this.notifyUpdate), (0, s.WG)(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events) this.events[t].clear();
                    for (let t in this.features) {
                        let e = this.features[t];
                        e && (e.unmount(), e.isMounted = !1)
                    }
                    this.current = null
                }
                addChild(t) {
                    this.children.add(t), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(t)
                }
                removeChild(t) {
                    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t)
                }
                bindToMotionValue(t, e) {
                    let r;
                    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                    let i = a.f.has(t);
                    i && this.onBindTransform && this.onBindTransform();
                    let n = e.on("change", e => {
                        this.latestValues[t] = e, this.props.onUpdate && s.Gt.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
                    });
                    window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                        n(), r && r(), e.owner && e.stop()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                updateFeatures() {
                    let t = "animation";
                    for (t in x.B) {
                        let e = x.B[t];
                        if (!e) continue;
                        let {
                            isEnabled: r,
                            Feature: i
                        } = e;
                        if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
                            let e = this.features[t];
                            e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, w.ge)()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < M.length; e++) {
                        let r = M[e];
                        this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
                        let i = t["on" + r];
                        i && (this.propEventSubscriptions[r] = this.on(r, i))
                    }
                    this.prevMotionValues = function (t, e, r) {
                        for (let i in e) {
                            let n = e[i],
                                s = r[i];
                            if ((0, o.S)(n)) t.addValue(i, n);
                            else if ((0, o.S)(s)) t.addValue(i, (0, l.OQ)(n, {
                                owner: t
                            }));
                            else if (s !== n)
                                if (t.hasValue(i)) {
                                    let e = t.getValue(i);
                                    !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n)
                                } else {
                                    let e = t.getStaticValue(i);
                                    t.addValue(i, (0, l.OQ)(void 0 !== e ? e : n, {
                                        owner: t
                                    }))
                                }
                        }
                        for (let i in r) void 0 === e[i] && t.removeValue(i);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    let r = this.values.get(t);
                    e !== r && (r && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let r = this.values.get(t);
                    return void 0 === r && void 0 !== e && (r = (0, l.OQ)(null === e ? void 0 : e, {
                        owner: this
                    }), this.addValue(t, r)), r
                }
                readValue(t, e) {
                    let r = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                    return null != r && ("string" == typeof r && ((0, v.i)(r) || (0, y.$)(r)) ? r = parseFloat(r) : !m(r) && d.f.test(e) && (r = (0, f.J)(t, e)), this.setBaseTarget(t, (0, o.S)(r) ? r.get() : r)), (0, o.S)(r) ? r.get() : r
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    let e, {
                        initial: r
                    } = this.props;
                    if ("string" == typeof r || "object" == typeof r) {
                        let i = (0, E.a)(this.props, r, this.presenceContext && this.presenceContext.custom);
                        i && (e = i[t])
                    }

                    if (r && void 0 !== e) return e;
                    let i = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === i || (0, o.S)(i) ? void 0 !== this.initialValues[t] && void 0 === e ? void 0 : this.baseTarget[t] : i
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new b.v), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
                scheduleRenderMicrotask() {
                    g.k.render(this.render)
                }
            }
        },
        3704: (t, e, r) => {
            r.d(e, {
                q: () => i
            });
            let i = {
                layout: 0,
                mainThread: 0,
                waapi: 0
            }
        },
        3757: (t, e, r) => {
            r.d(e, {
                L: () => o,
                m: () => s
            });
            var i = r(8588),
                n = r(6147);

            function s(t, e) {
                return (0, i.FY)((0, i.bS)(t.getBoundingClientRect(), e))
            }

            function o(t, e, r) {
                let i = s(t, r),
                    {
                        scroll: o
                    } = e;
                return o && ((0, n.Ql)(i.x, o.offset.x), (0, n.Ql)(i.y, o.offset.y)), i
            }
        },
        3945: (t, e, r) => {
            r.d(e, {
                Y: () => n
            });
            var i = r(2923);

            function n(t, e, r) {
                let n = Math.max(e - 5, 0);
                return (0, i.f)(r - t(n), e - n)
            }
        },
        3972: (t, e, r) => {
            r.d(e, {
                Sz: () => o,
                ZZ: () => l,
                dg: () => a
            });
            var i = r(2483),
                n = r(1765),
                s = r(4180);
            let o = (0, i.A)(.33, 1.53, .69, .99),
                a = (0, s.G)(o),
                l = (0, n.V)(a)
        },
        4050: (t, e, r) => {
            r.d(e, {
                T: () => o,
                n: () => a
            });
            var i = r(7887),
                n = r(4158),
                s = r(3522);
            let o = [i.ai, n.px, n.KN, n.uj, n.vw, n.vh, {
                test: t => "auto" === t,
                parse: t => t
            }],
                a = t => o.find((0, s.w)(t))
        },
        4158: (t, e, r) => {
            r.d(e, {
                KN: () => s,
                gQ: () => u,
                px: () => o,
                uj: () => n,
                vh: () => a,
                vw: () => l
            });
            let i = t => ({
                test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
                parse: parseFloat,
                transform: e => `${e}${t}`
            }),
                n = i("deg"),
                s = i("%"),
                o = i("px"),
                a = i("vh"),
                l = i("vw"),
                u = {
                    ...s,
                    parse: t => s.parse(t) / 100,
                    transform: t => s.transform(100 * t)
                }
        },
        4160: (t, e, r) => {
            r.d(e, {
                Ib: () => c,
                ry: () => h,
                zs: () => d
            });
            let i = t => 180 * t / Math.PI,
                n = t => o(i(Math.atan2(t[1], t[0]))),
                s = {
                    x: 4,
                    y: 5,
                    translateX: 4,
                    translateY: 5,
                    scaleX: 0,
                    scaleY: 3,
                    scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
                    rotate: n,
                    rotateZ: n,
                    skewX: t => i(Math.atan(t[1])),
                    skewY: t => i(Math.atan(t[2])),
                    skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
                },
                o = t => ((t %= 360) < 0 && (t += 360), t),
                a = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
                l = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
                u = {
                    x: 12,
                    y: 13,
                    z: 14,
                    translateX: 12,
                    translateY: 13,
                    translateZ: 14,
                    scaleX: a,
                    scaleY: l,
                    scale: t => (a(t) + l(t)) / 2,
                    rotateX: t => o(i(Math.atan2(t[6], t[5]))),
                    rotateY: t => o(i(Math.atan2(-t[2], t[0]))),
                    rotateZ: n,
                    rotate: n,
                    skewX: t => i(Math.atan(t[4])),
                    skewY: t => i(Math.atan(t[1])),
                    skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
                };

            function d(t) {
                return +!!t.includes("scale")
            }

            function h(t, e) {
                let r, i;
                if (!t || "none" === t) return d(e);
                let n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
                if (n) r = u, i = n;
                else {
                    let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
                    r = s, i = e
                }
                if (!i) return d(e);
                let o = r[e],
                    a = i[1].split(",").map(p);
                return "function" == typeof o ? o(a) : a[o]
            }
            let c = (t, e) => {
                let {
                    transform: r = "none"
                } = getComputedStyle(t);
                return h(r, e)
            };

            function p(t) {
                return parseFloat(t.trim())
            }
        },
        4180: (t, e, r) => {
            r.d(e, {
                G: () => i
            });
            let i = t => e => 1 - t(1 - e)
        },
        4261: (t, e, r) => {
            let i;
            r.d(e, {
                k: () => a
            });
            var n = r(3387),
                s = r(9515);

            function o() {
                i = void 0
            }
            let a = {
                now: () => (void 0 === i && a.set(s.uv.isProcessing || n.W.useManualTiming ? s.uv.timestamp : performance.now()), i),
                set: t => {
                    i = t, queueMicrotask(o)
                }
            }
        },
        4272: (t, e, r) => {
            r.d(e, {
                y: () => o
            });
            var i = r(1335),
                n = r(8476),
                s = r(9064);
            let o = {
                test: t => s.B.test(t) || i.u.test(t) || n.V.test(t),
                parse: t => s.B.test(t) ? s.B.parse(t) : n.V.test(t) ? n.V.parse(t) : i.u.parse(t),
                transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? s.B.transform(t) : n.V.transform(t),
                getAnimatableNone: t => {
                    let e = o.parse(t);
                    return e.alpha = 0, o.transform(e)
                }
            }
        },
        4436: (t, e, r) => {
            r.d(e, {
                k5: () => d
            });
            var i = r(2115),
                n = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                s = i.createContext && i.createContext(n),
                o = ["attr", "size", "title"];

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                    }
                    return t
                }).apply(this, arguments)
            }

            function l(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, i)
                }
                return r
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l(Object(r), !0).forEach(function (e) {
                        var i, n, s;
                        i = t, n = e, s = r[e], (n = function (t) {
                            var e = function (t, e) {
                                if ("object" != typeof t || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var i = r.call(t, e || "default");
                                    if ("object" != typeof i) return i;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == typeof e ? e : e + ""
                        }(n)) in i ? Object.defineProperty(i, n, {
                            value: s,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : i[n] = s
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function d(t) {
                return e => i.createElement(h, a({
                    attr: u({}, t.attr)
                }, e), function t(e) {
                    return e && e.map((e, r) => i.createElement(e.tag, u({
                        key: r
                    }, e.attr), t(e.child)))
                }(t.child))
            }

            function h(t) {
                var e = e => {
                    var r, {
                        attr: n,
                        size: s,
                        title: l
                    } = t,
                        d = function (t, e) {
                            if (null == t) return {};
                            var r, i, n = function (t, e) {
                                if (null == t) return {};
                                var r = {};
                                for (var i in t)
                                    if (Object.prototype.hasOwnProperty.call(t, i)) {
                                        if (e.indexOf(i) >= 0) continue;
                                        r[i] = t[i]
                                    }
                                return r
                            }(t, e);
                            if (Object.getOwnPropertySymbols) {
                                var s = Object.getOwnPropertySymbols(t);
                                for (i = 0; i < s.length; i++) r = s[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r])
                            }
                            return n
                        }(t, o),
                        h = s || e.size || "1em";
                    return e.className && (r = e.className), t.className && (r = (r ? r + " " : "") + t.className), i.createElement("svg", a({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, e.attr, n, d, {
                        className: r,
                        style: u(u({
                            color: t.color || e.color
                        }, e.style), t.style),
                        height: h,
                        width: h,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), l && i.createElement("title", null, l), t.children)
                };
                return void 0 !== s ? i.createElement(s.Consumer, null, t => e(t)) : e(n)
            }
        },
        4527: (t, e, r) => {
            r.d(e, {
                x: () => o
            });
            var i = r(4803),
                n = r(18),
                s = r(8609);

            function o(t, e, r) {
                let o = (0, s.x)(t, e, r);
                for (let r in t) ((0, i.S)(t[r]) || (0, i.S)(e[r])) && (o[-1 !== n.U.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = t[r]);
                return o
            }
        },
        4542: (t, e, r) => {
            r.d(e, {
                $: () => i,
                V: () => n
            });
            let i = () => { },
                n = () => { }
        },
        4608: (t, e, r) => {
            r.d(e, {
                X: () => s
            });
            var i = r(7215),
                n = r(2458);

            function s(t, e = 100, r) {
                let o = r({
                    ...t,
                    keyframes: [0, e]
                }),
                    a = Math.min((0, n.t)(o), n.Y);
                return {
                    type: "keyframes",
                    ease: t => o.next(a * t).value / e,
                    duration: (0, i.X)(a)
                }
            }
        },
        4687: (t, e, r) => {
            r.d(e, {
                o: () => f
            });
            var i = r(1297),
                n = r(7215),
                s = r(7705),
                o = r(2458),
                a = r(4608),
                l = r(3945);
            let u = {
                stiffness: 100,
                damping: 10,
                mass: 1,
                velocity: 0,
                duration: 800,
                bounce: .3,
                visualDuration: .3,
                restSpeed: {
                    granular: .01,
                    default: 2
                },
                restDelta: {
                    granular: .005,
                    default: .5
                },
                minDuration: .01,
                maxDuration: 10,
                minDamping: .05,
                maxDamping: 1
            };
            var d = r(4542);

            function h(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let c = ["duration", "bounce"],
                p = ["stiffness", "damping", "mass"];

            function m(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function f(t = u.visualDuration, e = u.bounce) {
                let r, a = "object" != typeof t ? {
                    visualDuration: t,
                    keyframes: [0, 1],
                    bounce: e
                } : t,
                    {
                        restSpeed: g,
                        restDelta: v
                    } = a,
                    y = a.keyframes[0],
                    b = a.keyframes[a.keyframes.length - 1],
                    x = {
                        done: !1,
                        value: y
                    },
                    {
                        stiffness: w,
                        damping: k,
                        mass: P,
                        duration: S,
                        velocity: T,
                        isResolvedFromDuration: A
                    } = function (t) {
                        let e = {
                            velocity: u.velocity,
                            stiffness: u.stiffness,
                            damping: u.damping,
                            mass: u.mass,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!m(t, p) && m(t, c))
                            if (t.visualDuration) {
                                let r = 2 * Math.PI / (1.2 * t.visualDuration),
                                    n = r * r,
                                    s = 2 * (0, i.q)(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                                e = {
                                    ...e,
                                    mass: u.mass,
                                    stiffness: n,
                                    damping: s
                                }
                            } else {
                                let r = function ({
                                    duration: t = u.duration,
                                    bounce: e = u.bounce,
                                    velocity: r = u.velocity,
                                    mass: s = u.mass
                                }) {
                                    let o, a;
                                    (0, d.$)(t <= (0, n.f)(u.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                                    let l = 1 - e;
                                    l = (0, i.q)(u.minDamping, u.maxDamping, l), t = (0, i.q)(u.minDuration, u.maxDuration, (0, n.X)(t)), l < 1 ? (o = e => {
                                        let i = e * l,
                                            n = i * t;
                                        return .001 - (i - r) / h(e, l) * Math.exp(-n)
                                    }, a = e => {
                                        let i = e * l * t,
                                            n = Math.pow(l, 2) * Math.pow(e, 2) * t,
                                            s = Math.exp(-i),
                                            a = h(Math.pow(e, 2), l);
                                        return (i * r + r - n) * s * (-o(e) + .001 > 0 ? -1 : 1) / a
                                    }) : (o = e => -.001 + Math.exp(-e * t) * ((e - r) * t + 1), a = e => t * t * (r - e) * Math.exp(-e * t));
                                    let c = function (t, e, r) {
                                        let i = r;
                                        for (let r = 1; r < 12; r++) i -= t(i) / e(i);
                                        return i
                                    }(o, a, 5 / t);
                                    if (t = (0, n.f)(t), isNaN(c)) return {
                                        stiffness: u.stiffness,
                                        damping: u.damping,
                                        duration: t
                                    }; {
                                        let e = Math.pow(c, 2) * s;
                                        return {
                                            stiffness: e,
                                            damping: 2 * l * Math.sqrt(s * e),
                                            duration: t
                                        }
                                    }
                                }(t);
                                (e = {
                                    ...e,
                                    ...r,
                                    mass: u.mass
                                }).isResolvedFromDuration = !0
                            }
                        return e
                    }({
                        ...a,
                        velocity: -(0, n.X)(a.velocity || 0)
                    }),
                    E = T || 0,
                    M = k / (2 * Math.sqrt(w * P)),
                    C = b - y,
                    j = (0, n.X)(Math.sqrt(w / P)),
                    V = 5 > Math.abs(C);
                if (g || (g = V ? u.restSpeed.granular : u.restSpeed.default), v || (v = V ? u.restDelta.granular : u.restDelta.default), M < 1) {
                    let t = h(j, M);
                    r = e => b - Math.exp(-M * j * e) * ((E + M * j * C) / t * Math.sin(t * e) + C * Math.cos(t * e))
                } else if (1 === M) r = t => b - Math.exp(-j * t) * (C + (E + j * C) * t);
                else {
                    let t = j * Math.sqrt(M * M - 1);
                    r = e => {
                        let r = Math.exp(-M * j * e),
                            i = Math.min(t * e, 300);
                        return b - r * ((E + M * j * C) * Math.sinh(i) + t * C * Math.cosh(i)) / t
                    }
                }
                let O = {
                    calculatedDuration: A && S || null,
                    next: t => {
                        let e = r(t);
                        if (A) x.done = t >= S;
                        else {
                            let i = 0 === t ? E : 0;
                            M < 1 && (i = 0 === t ? (0, n.f)(E) : (0, l.Y)(r, t, e));
                            let s = Math.abs(b - e) <= v;
                            x.done = Math.abs(i) <= g && s
                        }
                        return x.value = x.done ? b : e, x
                    },
                    toString: () => {
                        let t = Math.min((0, o.t)(O), o.Y),
                            e = (0, s.K)(e => O.next(t * e).value, t, 30);
                        return t + "ms " + e
                    },
                    toTransition: () => { }
                };
                return O
            }
            f.applyToOptions = t => {
                let e = (0, a.X)(t, 100, f);
                return t.ease = e.ease, t.duration = (0, n.f)(e.duration), t.type = "keyframes", t
            }
        },
        4744: (t, e, r) => {
            r.d(e, {
                Q: () => i
            });
            let i = {
                value: null,
                addProjectionMetrics: null
            }
        },
        4749: (t, e, r) => {
            r.d(e, {
                K: () => p
            });
            var i = r(4542),
                n = r(9827),
                s = r(6009),
                o = r(3972),
                a = r(7712),
                l = r(2483),
                u = r(2039),
                d = r(8589);
            let h = {
                linear: n.l,
                easeIn: u.a6,
                easeInOut: u.am,
                easeOut: u.vT,
                circIn: a.po,
                circInOut: a.tn,
                circOut: a.yT,
                backIn: o.dg,
                backInOut: o.ZZ,
                backOut: o.Sz,
                anticipate: s.b
            },
                c = t => "string" == typeof t,
                p = t => {
                    if ((0, d.D)(t)) {
                        (0, i.V)(4 === t.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
                        let [e, r, n, s] = t;
                        return (0, l.A)(e, r, n, s)
                    }
                    return c(t) ? ((0, i.V)(void 0 !== h[t], `Invalid easing type '${t}'`, "invalid-easing-type"), h[t]) : t
                }
        },
        4803: (t, e, r) => {
            r.d(e, {
                S: () => i
            });
            let i = t => !!(t && t.getVelocity)
        },
        5029: (t, e, r) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function () {
                    return o
                }
            });
            let i = r(2115),
                n = i.useLayoutEffect,
                s = i.useEffect;

            function o(t) {
                let {
                    headManager: e,
                    reduceComponentsToState: r
                } = t;

                function o() {
                    if (e && e.mountedInstances) {
                        let n = i.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
                        e.updateHead(r(n, t))
                    }
                }
                return n(() => {
                    var r;
                    return null == e || null == (r = e.mountedInstances) || r.add(t.children), () => {
                        var r;
                        null == e || null == (r = e.mountedInstances) || r.delete(t.children)
                    }
                }), n(() => (e && (e._pendingUpdate = o), () => {
                    e && (e._pendingUpdate = o)
                })), s(() => (e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null), () => {
                    e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null)
                })), null
            }
        },
        5100: (t, e) => {
            function r(t) {
                let {
                    widthInt: e,
                    heightInt: r,
                    blurWidth: i,
                    blurHeight: n,
                    blurDataURL: s,
                    objectFit: o
                } = t, a = i ? 40 * i : e, l = n ? 40 * n : r, u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImageBlurSvg", {
                enumerable: !0,
                get: function () {
                    return r
                }
            })
        },
        5193: (t, e, r) => {
            r.d(e, {
                b: () => y
            });
            var i = r(8109),
                n = r(4050),
                s = r(4542),
                o = r(3014),
                a = r(8606);
            let l = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
            var u = r(7322),
                d = r(7312),
                h = r(10),
                c = r(7277);
            let p = new Set(["auto", "none", "0"]);
            var m = r(280);
            class f extends u.h {
                constructor(t, e, r, i, n) {
                    super(t, e, r, i, n, !0)
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        element: e,
                        name: r
                    } = this;
                    if (!e || !e.current) return;
                    super.readKeyframes();
                    for (let r = 0; r < t.length; r++) {
                        let i = t[r];
                        if ("string" == typeof i && (i = i.trim(), (0, a.p)(i))) {
                            let n = function t(e, r, i = 1) {
                                (0, s.V)(i <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
                                let [n, u] = function (t) {
                                    let e = l.exec(t);
                                    if (!e) return [,];
                                    let [, r, i, n] = e;
                                    return [`--${r ?? i}`, n]
                                }(e);
                                if (!n) return;
                                let d = window.getComputedStyle(r).getPropertyValue(n);
                                if (d) {
                                    let t = d.trim();
                                    return (0, o.i)(t) ? parseFloat(t) : t
                                }
                                return (0, a.p)(u) ? t(u, r, i + 1) : u
                            }(i, e.current);
                            void 0 !== n && (t[r] = n), r === t.length - 1 && (this.finalKeyframe = i)
                        }
                    }
                    if (this.resolveNoneKeyframes(), !i.$.has(r) || 2 !== t.length) return;
                    let [u, d] = t, h = (0, n.n)(u), c = (0, n.n)(d);
                    if (h !== c)
                        if ((0, m.E4)(h) && (0, m.E4)(c))
                            for (let e = 0; e < t.length; e++) {
                                let r = t[e];
                                "string" == typeof r && (t[e] = parseFloat(r))
                            } else m.Hr[r] && (this.needsMeasurement = !0)
                }
                resolveNoneKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e
                    } = this, r = [];
                    for (let e = 0; e < t.length; e++) {
                        var i;
                        (null === t[e] || ("number" == typeof (i = t[e]) ? 0 === i : null === i || "none" === i || "0" === i || (0, d.$)(i))) && r.push(e)
                    }
                    r.length && function (t, e, r) {
                        let i, n = 0;
                        for (; n < t.length && !i;) {
                            let e = t[n];
                            "string" == typeof e && !p.has(e) && (0, h.V)(e).values.length && (i = t[n]), n++
                        }
                        if (i && r)
                            for (let n of e) t[n] = (0, c.J)(r, i)
                    }(t, r, e)
                }
                measureInitialState() {
                    let {
                        element: t,
                        unresolvedKeyframes: e,
                        name: r
                    } = this;
                    if (!t || !t.current) return;
                    "height" === r && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = m.Hr[r](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
                    let i = e[e.length - 1];
                    void 0 !== i && t.getValue(r, i).jump(i, !1)
                }
                measureEndState() {
                    let {
                        element: t,
                        name: e,
                        unresolvedKeyframes: r
                    } = this;
                    if (!t || !t.current) return;
                    let i = t.getValue(e);
                    i && i.jump(this.measuredOrigin, !1);
                    let n = r.length - 1,
                        s = r[n];
                    r[n] = m.Hr[e](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s), this.removedTransforms?.length && this.removedTransforms.forEach(([e, r]) => {
                        t.getValue(e).set(r)
                    }), this.resolveNoneKeyframes()
                }
            }
            var g = r(4803),
                v = r(3562);
            class y extends v.B {
                constructor() {
                    super(...arguments), this.KeyframeResolver = f
                }
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: r
                }) {
                    delete e[t], delete r[t]
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    (0, g.S)(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
            }
        },
        5245: (t, e, r) => {
            r.d(e, {
                M: () => h
            });
            var i = r(18),
                n = r(4160),
                s = r(8606),
                o = r(3757),
                a = r(5193),
                l = r(7684),
                u = r(600),
                d = r(8609);
            class h extends a.b {
                constructor() {
                    super(...arguments), this.type = "html", this.renderInstance = u.e
                }
                readValueFromInstance(t, e) {
                    if (i.f.has(e)) return this.projection?.isProjecting ? (0, n.zs)(e) : (0, n.Ib)(t, e); {
                        let r = window.getComputedStyle(t),
                            i = ((0, s.j)(e) ? r.getPropertyValue(e) : r[e]) || 0;
                        return "string" == typeof i ? i.trim() : i
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return (0, o.m)(t, e)
                }
                build(t, e, r) {
                    (0, l.O)(t, e, r.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e, r) {
                    return (0, d.x)(t, e, r)
                }
            }
        },
        5305: (t, e, r) => {
            r.d(e, {
                w: () => i
            });

            function i(t) {
                return "string" == typeof t || Array.isArray(t)
            }
        },
        5511: (t, e, r) => {
            r.d(e, {
                C: () => i
            });
            let i = new WeakMap
        },
        5564: (t, e, r) => {
            var i = r(9509);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), ! function (t, e) {
                for (var r in e) Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
            }(e, {
                default: function () {
                    return g
                },
                defaultHead: function () {
                    return c
                }
            });
            let n = r(8466),
                s = r(3011),
                o = r(5155),
                a = s._(r(2115)),
                l = n._(r(5029)),
                u = r(2464),
                d = r(2830),
                h = r(7544);

            function c(t) {
                void 0 === t && (t = !1);
                let e = [(0, o.jsx)("meta", {
                    charSet: "utf-8"
                }, "charset")];
                return t || e.push((0, o.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width"
                }, "viewport")), e
            }

            function p(t, e) {
                return "string" == typeof e || "number" == typeof e ? t : e.type === a.default.Fragment ? t.concat(a.default.Children.toArray(e.props.children).reduce((t, e) => "string" == typeof e || "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
            }
            r(3230);
            let m = ["name", "httpEquiv", "charSet", "itemProp"];

            function f(t, e) {
                let {
                    inAmpMode: r
                } = e;
                return t.reduce(p, []).reverse().concat(c(r).reverse()).filter(function () {
                    let t = new Set,
                        e = new Set,
                        r = new Set,
                        i = {};
                    return n => {
                        let s = !0,
                            o = !1;
                        if (n.key && "number" != typeof n.key && n.key.indexOf("$") > 0) {
                            o = !0;
                            let e = n.key.slice(n.key.indexOf("$") + 1);
                            t.has(e) ? s = !1 : t.add(e)
                        }
                        switch (n.type) {
                            case "title":
                            case "base":
                                e.has(n.type) ? s = !1 : e.add(n.type);
                                break;
                            case "meta":
                                for (let t = 0, e = m.length; t < e; t++) {
                                    let e = m[t];
                                    if (n.props.hasOwnProperty(e))
                                        if ("charSet" === e) r.has(e) ? s = !1 : r.add(e);
                                        else {
                                            let t = n.props[e],
                                                r = i[e] || new Set;
                                            ("name" !== e || !o) && r.has(t) ? s = !1 : (r.add(t), i[e] = r)
                                        }
                                }
                        }
                        return s
                    }
                }()).reverse().map((t, e) => {
                    let n = t.key || e;
                    if (i.env.__NEXT_OPTIMIZE_FONTS && !r && "link" === t.type && t.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(e => t.props.href.startsWith(e))) {
                        let e = {
                            ...t.props || {}
                        };
                        return e["data-href"] = e.href, e.href = void 0, e["data-optimized-fonts"] = !0, a.default.cloneElement(t, e)
                    }
                    return a.default.cloneElement(t, {
                        key: n
                    })
                })
            }
            let g = function (t) {
                let {
                    children: e
                } = t, r = (0, a.useContext)(u.AmpStateContext), i = (0, a.useContext)(d.HeadManagerContext);
                return (0, o.jsx)(l.default, {
                    reduceComponentsToState: f,
                    headManager: i,
                    inAmpMode: (0, h.isInAmpMode)(r),
                    children: e
                })
            };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        5580: (t, e, r) => {
            r.d(e, {
                z: () => o
            });
            var i = r(4803),
                n = r(98),
                s = r(9952);

            function o(t, e, r) {
                let o = (0, i.S)(t) ? t : (0, n.OQ)(t);
                return o.start((0, s.f)("", o, e, r)), o.animation
            }
        },
        5626: (t, e, r) => {
            r.d(e, {
                v: () => n
            });
            var i = r(6668);
            class n {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return (0, i.Kq)(this.subscriptions, t), () => (0, i.Ai)(this.subscriptions, t)
                }
                notify(t, e, r) {
                    let i = this.subscriptions.length;
                    if (i)
                        if (1 === i) this.subscriptions[0](t, e, r);
                        else
                            for (let n = 0; n < i; n++) {
                                let i = this.subscriptions[n];
                                i && i(t, e, r)
                            }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
        },
        5818: (t, e, r) => {
            r.d(e, {
                q: () => i
            });
            let i = (t, e, r) => {
                let i = e - t;
                return 0 === i ? 1 : (r - t) / i
            }
        },
        5840: (t, e) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), ! function (t, e) {
                for (var r in e) Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
            }(e, {
                VALID_LOADERS: function () {
                    return r
                },
                imageConfigDefault: function () {
                    return i
                }
            });
            let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
                i = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp", "image/png", "image/jpeg"], // ✅ Add PNG and JPEG
                    dangerouslyAllowSVG: true,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "attachment",
                    localPatterns: void 0,
                    remotePatterns: [],
                    qualities: void 0,
                    unoptimized: !1
                }
        },
        5910: (t, e, r) => {
            r.d(e, {
                p: () => i
            });
            let i = t => Array.isArray(t)
        },
        5920: (t, e, r) => {
            r.d(e, {
                $: () => s,
                q: () => o
            });
            var i = r(614);
            let n = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
                s = (t, e) => r => !!("string" == typeof r && n.test(r) && r.startsWith(t) || e && null != r && Object.prototype.hasOwnProperty.call(r, e)),
                o = (t, e, r) => n => {
                    if ("string" != typeof n) return n;
                    let [s, o, a, l] = n.match(i.S);
                    return {
                        [t]: parseFloat(s),
                        [e]: parseFloat(o),
                        [r]: parseFloat(a),
                        alpha: void 0 !== l ? parseFloat(l) : 1
                    }
                }
        },
        5943: (t, e, r) => {
            r.d(e, {
                h: () => n
            });
            var i = r(9782);

            function n(t) {
                return (0, i.x)(t) && "svg" === t.tagName
            }
        },
        6009: (t, e, r) => {
            r.d(e, {
                b: () => n
            });
            var i = r(3972);
            let n = t => (t *= 2) < 1 ? .5 * (0, i.dg)(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        },
        6101: (t, e, r) => {
            r.d(e, {
                s: () => o,
                t: () => s
            });
            var i = r(2115);

            function n(t, e) {
                if ("function" == typeof t) return t(e);
                null != t && (t.current = e)
            }

            function s(...t) {
                return e => {
                    let r = !1,
                        i = t.map(t => {
                            let i = n(t, e);
                            return r || "function" != typeof i || (r = !0), i
                        });
                    if (r) return () => {
                        for (let e = 0; e < i.length; e++) {
                            let r = i[e];
                            "function" == typeof r ? r() : n(t[e], null)
                        }
                    }
                }
            }

            function o(...t) {
                return i.useCallback(s(...t), t)
            }
        },
        6147: (t, e, r) => {
            r.d(e, {
                OU: () => u,
                Ql: () => d,
                Ww: () => c,
                hq: () => s,
                o4: () => l
            });
            var i = r(3210),
                n = r(2662);

            function s(t, e, r) {
                return r + e * (t - r)
            }

            function o(t, e, r, i, n) {
                return void 0 !== n && (t = i + n * (t - i)), i + r * (t - i) + e
            }

            function a(t, e = 0, r = 1, i, n) {
                t.min = o(t.min, e, r, i, n), t.max = o(t.max, e, r, i, n)
            }

            function l(t, {
                x: e,
                y: r
            }) {
                a(t.x, e.translate, e.scale, e.originPoint), a(t.y, r.translate, r.scale, r.originPoint)
            }

            function u(t, e, r, i = !1) {
                let s, o, a = r.length;
                if (a) {
                    e.x = e.y = 1;
                    for (let u = 0; u < a; u++) {
                        o = (s = r[u]).projectionDelta;
                        let {
                            visualElement: a
                        } = s.options;
                        (!a || !a.props.style || "contents" !== a.props.style.display) && (i && s.options.layoutScroll && s.scroll && s !== s.root && c(t, {
                            x: -s.scroll.offset.x,
                            y: -s.scroll.offset.y
                        }), o && (e.x *= o.x.scale, e.y *= o.y.scale, l(t, o)), i && (0, n.HD)(s.latestValues) && c(t, s.latestValues))
                    }
                    e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                }
            }

            function d(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function h(t, e, r, n, s = .5) {
                let o = (0, i.k)(t.min, t.max, s);
                a(t, e, r, o, n)
            }

            function c(t, e) {
                h(t.x, e.x, e.scaleX, e.scale, e.originX), h(t.y, e.y, e.scaleY, e.scale, e.originY)
            }
        },
        6333: (t, e, r) => {
            r.d(e, {
                g: () => s
            });
            var i = r(3387),
                n = r(4803);

            function s(t, e) {
                let r = t.getValue("willChange");
                if ((0, n.S)(r) && r.add) return r.add(e);
                if (!r && i.W.WillChange) {
                    let r = new i.W.WillChange("auto");
                    t.addValue("willChange", r), r.add(e)
                }
            }
        },
        6340: (t, e, r) => {
            r.d(e, {
                N: () => i
            });

            function i(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }
        },
        6604: (t, e, r) => {
            r.d(e, {
                W: () => o
            });
            var i = r(2115),
                n = r(2198);
            let s = {
                some: 0,
                all: 1
            };

            function o(t, {
                root: e,
                margin: r,
                amount: a,
                once: l = !1,
                initial: u = !1
            } = {}) {
                let [d, h] = (0, i.useState)(u);
                return (0, i.useEffect)(() => {
                    if (!t.current || l && d) return;
                    let i = {
                        root: e && e.current || void 0,
                        margin: r,
                        amount: a
                    };
                    return function (t, e, {
                        root: r,
                        margin: i,
                        amount: o = "some"
                    } = {}) {
                        let a = (0, n.K)(t),
                            l = new WeakMap,
                            u = new IntersectionObserver(t => {
                                t.forEach(t => {
                                    let r = l.get(t.target);
                                    if (!!r !== t.isIntersecting)
                                        if (t.isIntersecting) {
                                            let r = e(t.target, t);
                                            "function" == typeof r ? l.set(t.target, r) : u.unobserve(t.target)
                                        } else "function" == typeof r && (r(t), l.delete(t.target))
                                })
                            }, {
                                root: r,
                                rootMargin: i,
                                threshold: "number" == typeof o ? o : s[o]
                            });
                        return a.forEach(t => u.observe(t)), () => u.disconnect()
                    }(t.current, () => (h(!0), l ? void 0 : () => h(!1)), i)
                }, [e, t, r, l, a]), d
            }
        },
        6642: (t, e, r) => {
            r.d(e, {
                B: () => n
            });
            let i = {
                animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                exit: ["exit"],
                drag: ["drag", "dragControls"],
                focus: ["whileFocus"],
                hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                layout: ["layout", "layoutId"]
            },
                n = {};
            for (let t in i) n[t] = {
                isEnabled: e => i[t].some(t => !!e[t])
            }
        },
        6654: (t, e, r) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "useMergedRef", {
                enumerable: !0,
                get: function () {
                    return n
                }
            });
            let i = r(2115);

            function n(t, e) {
                let r = (0, i.useRef)(null),
                    n = (0, i.useRef)(null);
                return (0, i.useCallback)(i => {
                    if (null === i) {
                        let t = r.current;
                        t && (r.current = null, t());
                        let e = n.current;
                        e && (n.current = null, e())
                    } else t && (r.current = s(t, i)), e && (n.current = s(e, i))
                }, [t, e])
            }

            function s(t, e) {
                if ("function" != typeof t) return t.current = e, () => {
                    t.current = null
                }; {
                    let r = t(e);
                    return "function" == typeof r ? r : () => t(null)
                }
            } ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        6668: (t, e, r) => {
            function i(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function n(t, e) {
                let r = t.indexOf(e);
                r > -1 && t.splice(r, 1)
            }
            r.d(e, {
                Ai: () => n,
                Kq: () => i
            })
        },
        6752: (t, e, r) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "ImageConfigContext", {
                enumerable: !0,
                get: function () {
                    return s
                }
            });
            let i = r(8466)._(r(2115)),
                n = r(5840),
                s = i.default.createContext(n.imageConfigDefault)
        },
        6766: (t, e, r) => {
            r.d(e, {
                default: () => n.a
            });
            var i = r(1469),
                n = r.n(i)
        },
        6874: (t, e, r) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), ! function (t, e) {
                for (var r in e) Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
            }(e, {
                default: function () {
                    return g
                },
                useLinkStatus: function () {
                    return y
                }
            });
            let i = r(3011),
                n = r(5155),
                s = i._(r(2115)),
                o = r(2757),
                a = r(5227),
                l = r(9818),
                u = r(6654),
                d = r(9991),
                h = r(5929);
            r(3230);
            let c = r(4930),
                p = r(2664),
                m = r(6634);

            function f(t) {
                return "string" == typeof t ? t : (0, o.formatUrl)(t)
            }

            function g(t) {
                let e, r, i, [o, g] = (0, s.useOptimistic)(c.IDLE_LINK_STATUS),
                    y = (0, s.useRef)(null),
                    {
                        href: b,
                        as: x,
                        children: w,
                        prefetch: k = null,
                        passHref: P,
                        replace: S,
                        shallow: T,
                        scroll: A,
                        onClick: E,
                        onMouseEnter: M,
                        onTouchStart: C,
                        legacyBehavior: j = !1,
                        onNavigate: V,
                        ref: O,
                        unstable_dynamicOnHover: D,
                        ...R
                    } = t;
                e = w, j && ("string" == typeof e || "number" == typeof e) && (e = (0, n.jsx)("a", {
                    children: e
                }));
                let L = s.default.useContext(a.AppRouterContext),
                    F = !1 !== k,
                    I = null === k ? l.PrefetchKind.AUTO : l.PrefetchKind.FULL,
                    {
                        href: B,
                        as: _
                    } = s.default.useMemo(() => {
                        let t = f(b);
                        return {
                            href: t,
                            as: x ? f(x) : t
                        }
                    }, [b, x]);
                j && (r = s.default.Children.only(e));
                let z = j ? r && "object" == typeof r && r.ref : O,
                    N = s.default.useCallback(t => (null !== L && (y.current = (0, c.mountLinkInstance)(t, B, L, I, F, g)), () => {
                        y.current && ((0, c.unmountLinkForCurrentNavigation)(y.current), y.current = null), (0, c.unmountPrefetchableInstance)(t)
                    }), [F, B, L, I, g]),
                    U = {
                        ref: (0, u.useMergedRef)(N, z),
                        onClick(t) {
                            j || "function" != typeof E || E(t), j && r.props && "function" == typeof r.props.onClick && r.props.onClick(t), L && (t.defaultPrevented || function (t, e, r, i, n, o, a) {
                                let {
                                    nodeName: l
                                } = t.currentTarget;
                                if (!("A" === l.toUpperCase() && function (t) {
                                    let e = t.currentTarget.getAttribute("target");
                                    return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                                }(t) || t.currentTarget.hasAttribute("download"))) {
                                    if (!(0, p.isLocalURL)(e)) {
                                        n && (t.preventDefault(), location.replace(e));
                                        return
                                    }
                                    t.preventDefault(), s.default.startTransition(() => {
                                        if (a) {
                                            let t = !1;
                                            if (a({
                                                preventDefault: () => {
                                                    t = !0
                                                }
                                            }), t) return
                                        } (0, m.dispatchNavigateAction)(r || e, n ? "replace" : "push", null == o || o, i.current)
                                    })
                                }
                            }(t, B, _, y, S, A, V))
                        },
                        onMouseEnter(t) {
                            j || "function" != typeof M || M(t), j && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(t), L && F && (0, c.onNavigationIntent)(t.currentTarget, !0 === D)
                        },
                        onTouchStart: function (t) {
                            j || "function" != typeof C || C(t), j && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(t), L && F && (0, c.onNavigationIntent)(t.currentTarget, !0 === D)
                        }
                    };
                return (0, d.isAbsoluteUrl)(_) ? U.href = _ : j && !P && ("a" !== r.type || "href" in r.props) || (U.href = (0, h.addBasePath)(_)), i = j ? s.default.cloneElement(r, U) : (0, n.jsx)("a", {
                    ...R,
                    ...U,
                    children: e
                }), (0, n.jsx)(v.Provider, {
                    value: o,
                    children: i
                })
            }
            r(3180);
            let v = (0, s.createContext)(c.IDLE_LINK_STATUS),
                y = () => (0, s.useContext)(v);
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        6926: (t, e, r) => {
            r.d(e, {
                P: () => n
            });
            var i = r(1788);

            function n(t) {
                return t.props[i.n]
            }
        },
        6983: (t, e, r) => {
            r.d(e, {
                G: () => i
            });

            function i(t) {
                return "object" == typeof t && null !== t
            }
        },
        7123: (t, e, r) => {
            r.d(e, {
                k: () => i
            });
            let {
                schedule: i
            } = (0, r(8437).I)(queueMicrotask, !1)
        },
        7215: (t, e, r) => {
            r.d(e, {
                X: () => n,
                f: () => i
            });
            let i = t => 1e3 * t,
                n = t => t / 1e3
        },
        7277: (t, e, r) => {
            r.d(e, {
                J: () => o
            });
            var i = r(10),
                n = r(2171),
                s = r(1834);

            function o(t, e) {
                let r = (0, s.D)(t);
                return r !== n.p && (r = i.f), r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
            }
        },
        7312: (t, e, r) => {
            r.d(e, {
                $: () => i
            });
            let i = t => /^0[^.\s]+$/u.test(t)
        },
        7322: (t, e, r) => {
            r.d(e, {
                h: () => c,
                q: () => h
            });
            var i = r(280),
                n = r(9515);
            let s = new Set,
                o = !1,
                a = !1,
                l = !1;

            function u() {
                if (a) {
                    let t = Array.from(s).filter(t => t.needsMeasurement),
                        e = new Set(t.map(t => t.element)),
                        r = new Map;
                    e.forEach(t => {
                        let e = (0, i.W9)(t);
                        e.length && (r.set(t, e), t.render())
                    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                        t.render();
                        let e = r.get(t);
                        e && e.forEach(([e, r]) => {
                            t.getValue(e)?.set(r)
                        })
                    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                        void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                    })
                }
                a = !1, o = !1, s.forEach(t => t.complete(l)), s.clear()
            }

            function d() {
                s.forEach(t => {
                    t.readKeyframes(), t.needsMeasurement && (a = !0)
                })
            }

            function h() {
                l = !0, d(), u(), l = !1
            }
            class c {
                constructor(t, e, r, i, n, s = !1) {
                    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = r, this.motionValue = i, this.element = n, this.isAsync = s
                }
                scheduleResolve() {
                    this.state = "scheduled", this.isAsync ? (s.add(this), o || (o = !0, n.Gt.read(d), n.Gt.resolveKeyframes(u))) : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e,
                        element: r,
                        motionValue: i
                    } = this;
                    if (null === t[0]) {
                        let n = i?.get(),
                            s = t[t.length - 1];
                        if (void 0 !== n) t[0] = n;
                        else if (r && e) {
                            let i = r.readValue(e, s);
                            null != i && (t[0] = i)
                        }
                        void 0 === t[0] && (t[0] = s), i && void 0 === n && i.set(t[0])
                    }
                    for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1])
                }
                setFinalKeyframe() { }
                measureInitialState() { }
                renderEndStyles() { }
                measureEndState() { }
                complete(t = !1) {
                    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), s.delete(this)
                }
                cancel() {
                    "scheduled" === this.state && (s.delete(this), this.state = "pending")
                }
                resume() {
                    "pending" === this.state && this.scheduleResolve()
                }
            }
        },
        7351: (t, e, r) => {
            r.d(e, {
                s: () => n
            });
            var i = r(6983);

            function n(t) {
                return (0, i.G)(t) && "offsetHeight" in t
            }
        },
        7494: (t, e, r) => {
            r.d(e, {
                E: () => n
            });
            var i = r(2115);
            let n = r(8972).B ? i.useLayoutEffect : i.useEffect
        },
        7544: (t, e) => {
            function r(t) {
                let {
                    ampFirst: e = !1,
                    hybrid: r = !1,
                    hasQuery: i = !1
                } = void 0 === t ? {} : t;
                return e || r && i
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isInAmpMode", {
                enumerable: !0,
                get: function () {
                    return r
                }
            })
        },
        7684: (t, e, r) => {
            r.d(e, {
                O: () => u
            });
            var i = r(18),
                n = r(8606);
            let s = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
            var o = r(2403);
            let a = {
                x: "translateX",
                y: "translateY",
                z: "translateZ",
                transformPerspective: "perspective"
            },
                l = i.U.length;

            function u(t, e, r) {
                let {
                    style: u,
                    vars: d,
                    transformOrigin: h
                } = t, c = !1, p = !1;
                for (let t in e) {
                    let r = e[t];
                    if (i.f.has(t)) {
                        c = !0;
                        continue
                    }
                    if ((0, n.j)(t)) {
                        d[t] = r;
                        continue
                    } {
                        let e = s(r, o.W[t]);
                        t.startsWith("origin") ? (p = !0, h[t] = e) : u[t] = e
                    }
                }
                if (!e.transform && (c || r ? u.transform = function (t, e, r) {
                    let n = "",
                        u = !0;
                    for (let d = 0; d < l; d++) {
                        let l = i.U[d],
                            h = t[l];
                        if (void 0 === h) continue;
                        let c = !0;
                        if (!(c = "number" == typeof h ? h === +!!l.startsWith("scale") : 0 === parseFloat(h)) || r) {
                            let t = s(h, o.W[l]);
                            if (!c) {
                                u = !1;
                                let e = a[l] || l;
                                n += `${e}(${t}) `
                            }
                            r && (e[l] = t)
                        }
                    }
                    return n = n.trim(), r ? n = r(e, u ? "" : n) : u && (n = "none"), n
                }(e, t.transform, r) : u.transform && (u.transform = "none")), p) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: r = 0
                    } = h;
                    u.transformOrigin = `${t} ${e} ${r}`
                }
            }
        },
        7705: (t, e, r) => {
            r.d(e, {
                K: () => i
            });
            let i = (t, e, r = 10) => {
                let i = "",
                    n = Math.max(Math.round(e / r), 2);
                for (let e = 0; e < n; e++) i += Math.round(1e4 * t(e / (n - 1))) / 1e4 + ", ";
                return `linear(${i.substring(0, i.length - 2)})`
            }
        },
        7712: (t, e, r) => {
            r.d(e, {
                po: () => s,
                tn: () => a,
                yT: () => o
            });
            var i = r(1765),
                n = r(4180);
            let s = t => 1 - Math.sin(Math.acos(t)),
                o = (0, n.G)(s),
                a = (0, i.V)(s)
        },
        7887: (t, e, r) => {
            r.d(e, {
                X4: () => s,
                ai: () => n,
                hs: () => o
            });
            var i = r(1297);
            let n = {
                test: t => "number" == typeof t,
                parse: parseFloat,
                transform: t => t
            },
                s = {
                    ...n,
                    transform: t => (0, i.q)(0, 1, t)
                },
                o = {
                    ...n,
                    default: 1
                }
        },
        7934: (t, e, r) => {
            r.d(e, {
                $: () => c
            });
            var i = r(8777),
                n = r(9515),
                s = r(8109),
                o = r(98),
                a = r(5910),
                l = r(419),
                u = r(6333),
                d = r(6926),
                h = r(9952);

            function c(t, e, {
                delay: r = 0,
                transitionOverride: p,
                type: m
            } = {}) {
                let {
                    transition: f = t.getDefaultTransition(),
                    transitionEnd: g,
                    ...v
                } = e;
                p && (f = p);
                let y = [],
                    b = m && t.animationState && t.animationState.getState()[m];
                for (let e in v) {
                    let o = t.getValue(e, t.latestValues[e] ?? null),
                        a = v[e];
                    if (void 0 === a || b && function ({
                        protectedKeys: t,
                        needsAnimating: e
                    }, r) {
                        let i = t.hasOwnProperty(r) && !0 !== e[r];
                        return e[r] = !1, i
                    }(b, e)) continue;
                    let l = {
                        delay: r,
                        ...(0, i.r)(f || {}, e)
                    },
                        c = o.get();
                    if (void 0 !== c && !o.isAnimating && !Array.isArray(a) && a === c && !l.velocity) continue;
                    let p = !1;
                    if (window.MotionHandoffAnimation) {
                        let r = (0, d.P)(t);
                        if (r) {
                            let t = window.MotionHandoffAnimation(r, e, n.Gt);
                            null !== t && (l.startTime = t, p = !0)
                        }
                    } (0, u.g)(t, e), o.start((0, h.f)(e, o, a, t.shouldReduceMotion && s.$.has(e) ? {
                        type: !1
                    } : l, t, p));
                    let m = o.animation;
                    m && y.push(m)
                }
                return g && Promise.all(y).then(() => {
                    n.Gt.update(() => {
                        g && function (t, e) {
                            let {
                                transitionEnd: r = {},
                                transition: i = {},
                                ...n
                            } = (0, l.K)(t, e) || {};
                            for (let e in n = {
                                ...n,
                                ...r
                            }) {
                                var s;
                                let r = (s = n[e], (0, a.p)(s) ? s[s.length - 1] || 0 : s);
                                t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, (0, o.OQ)(r))
                            }
                        }(t, g)
                    })
                }), y
            }
        },
        8109: (t, e, r) => {
            r.d(e, {
                $: () => i
            });
            let i = new Set(["width", "height", "top", "left", "right", "bottom", ...r(18).U])
        },
        8312: (t, e, r) => {
            r.d(e, {
                U: () => i,
                _: () => n
            });
            let i = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                n = ["initial", ...i]
        },
        8431: (t, e, r) => {
            // Maybe it should be r.S or another existing variable?
            r.d(e, {
                P: () => r.S  // if r.S exists
            });
            var i = r(2115),
                n = r(5245),
                s = r(728);
            let o = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function a(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (o.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
                return !1
            }
            var l = r(5155),
                u = r(869);
            let d = (0, i.createContext)({
                strict: !1
            });
            var h = r(1508);
            let c = (0, i.createContext)({});
            var p = r(9253),
                m = r(5305);

            function f(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            var g = r(4803),
                v = r(3055),
                y = r(7684);
            let b = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function x(t, e, r) {
                for (let i in e) (0, g.S)(e[i]) || (0, v.z)(i, r) || (t[i] = e[i])
            }
            var w = r(2076);
            let k = () => ({
                ...b(),
                attrs: {}
            });
            var P = r(3095);
            let S = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function T(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || S.has(t)
            }
            let A = t => !T(t);
            try {
                ! function (t) {
                    "function" == typeof t && (A = e => e.startsWith("on") ? !T(e) : t(e))
                }(require("@emotion/is-prop-valid").default)
            } catch { }
            var E = r(6340),
                M = r(845),
                C = r(2735),
                j = r(2885);

            function V(t) {
                return (0, g.S)(t) ? t.get() : t
            }
            let O = t => (e, r) => {
                let n = (0, i.useContext)(c),
                    s = (0, i.useContext)(M.t),
                    o = () => (function ({
                        scrapeMotionValuesFromProps: t,
                        createRenderState: e
                    }, r, i, n) {
                        return {
                            latestValues: function (t, e, r, i) {
                                let n = {},
                                    s = i(t, {});
                                for (let t in s) n[t] = V(s[t]);
                                let {
                                    initial: o,
                                    animate: a
                                } = t, l = (0, p.e)(t), u = (0, p.O)(t);
                                e && u && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial), void 0 === a && (a = e.animate));
                                let d = !!r && !1 === r.initial,
                                    h = (d = d || !1 === o) ? a : o;
                                if (h && "boolean" != typeof h && !(0, E.N)(h)) {
                                    let e = Array.isArray(h) ? h : [h];
                                    for (let r = 0; r < e.length; r++) {
                                        let i = (0, C.a)(t, e[r]);
                                        if (i) {
                                            let {
                                                transitionEnd: t,
                                                transition: e,
                                                ...r
                                            } = i;
                                            for (let t in r) {
                                                let e = r[t];
                                                if (Array.isArray(e)) {
                                                    let t = d ? e.length - 1 : 0;
                                                    e = e[t]
                                                }
                                                null !== e && (n[t] = e)
                                            }
                                            for (let e in t) n[e] = t[e]
                                        }
                                    }
                                }
                                return n
                            }(r, i, n, t),
                            renderState: e()
                        }
                    })(t, e, n, s);
                return r ? o() : (0, j.M)(o)
            },
                D = O({
                    scrapeMotionValuesFromProps: r(8609).x,
                    createRenderState: b
                }),
                R = O({
                    scrapeMotionValuesFromProps: r(4527).x,
                    createRenderState: k
                });
            var L = r(8972),
                F = r(6642);
            let I = Symbol.for("motionComponentSymbol");

            function B(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }
            var _ = r(1788);
            let z = (0, i.createContext)({});
            var N = r(7494);

            function U(t) {
                var e, r;
                let {
                    forwardMotionProps: n = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = arguments.length > 2 ? arguments[2] : void 0, o = arguments.length > 3 ? arguments[3] : void 0;
                s && function (t) {
                    for (let e in t) F.B[e] = {
                        ...F.B[e],
                        ...t[e]
                    }
                }(s);
                let v = a(t) ? R : D;

                function S(e, r) {
                    var s, S, E;
                    let C, j = {
                        ...(0, i.useContext)(h.Q),
                        ...e,
                        layoutId: function (t) {
                            let {
                                layoutId: e
                            } = t, r = (0, i.useContext)(u.L).id;
                            return r && void 0 !== e ? r + "-" + e : e
                        }(e)
                    },
                        {
                            isStatic: V
                        } = j,
                        O = function (t) {
                            let {
                                initial: e,
                                animate: r
                            } = function (t, e) {
                                if ((0, p.e)(t)) {
                                    let {
                                        initial: e,
                                        animate: r
                                    } = t;
                                    return {
                                        initial: !1 === e || (0, m.w)(e) ? e : void 0,
                                        animate: (0, m.w)(r) ? r : void 0
                                    }
                                }
                                return !1 !== t.inherit ? e : {}
                            }(t, (0, i.useContext)(c));
                            return (0, i.useMemo)(() => ({
                                initial: e,
                                animate: r
                            }), [f(e), f(r)])
                        }(e),
                        D = v(e, V);
                    if (!V && L.B) {
                        S = 0, E = 0, (0, i.useContext)(d).strict;
                        let e = function (t) {
                            let {
                                drag: e,
                                layout: r
                            } = F.B;
                            if (!e && !r) return {};
                            let i = {
                                ...e,
                                ...r
                            };
                            return {
                                MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == r ? void 0 : r.isEnabled(t)) ? i.MeasureLayout : void 0,
                                ProjectionNode: i.ProjectionNode
                            }
                        }(j);
                        C = e.MeasureLayout, O.visualElement = function (t, e, r, n, s) {
                            let {
                                visualElement: o
                            } = (0, i.useContext)(c), a = (0, i.useContext)(d), l = (0, i.useContext)(M.t), u = (0, i.useContext)(h.Q).reducedMotion, p = (0, i.useRef)(null);
                            n = n || a.renderer, !p.current && n && (p.current = n(t, {
                                visualState: e,
                                parent: o,
                                props: r,
                                presenceContext: l,
                                blockInitialAnimation: !!l && !1 === l.initial,
                                reducedMotionConfig: u
                            }));
                            let m = p.current,
                                f = (0, i.useContext)(z);
                            m && !m.projection && s && ("html" === m.type || "svg" === m.type) && function (t, e, r, i) {
                                let {
                                    layoutId: n,
                                    layout: s,
                                    drag: o,
                                    dragConstraints: a,
                                    layoutScroll: l,
                                    layoutRoot: u,
                                    layoutCrossfade: d
                                } = e;
                                t.projection = new r(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                                    if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                }(t.parent)), t.projection.setOptions({
                                    layoutId: n,
                                    layout: s,
                                    alwaysMeasureLayout: !!o || a && B(a),
                                    visualElement: t,
                                    animationType: "string" == typeof s ? s : "both",
                                    initialPromotionConfig: i,
                                    crossfade: d,
                                    layoutScroll: l,
                                    layoutRoot: u
                                })
                            }(p.current, r, s, f);
                            let g = (0, i.useRef)(!1);
                            (0, i.useInsertionEffect)(() => {
                                m && g.current && m.update(r, l)
                            });
                            let v = r[_.n],
                                y = (0, i.useRef)(!!v && !window.MotionHandoffIsComplete?.(v) && window.MotionHasOptimisedAnimation?.(v));
                            return (0, N.E)(() => {
                                m && (g.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), y.current && m.animationState && m.animationState.animateChanges())
                            }), (0, i.useEffect)(() => {
                                m && (!y.current && m.animationState && m.animationState.animateChanges(), y.current && (queueMicrotask(() => {
                                    window.MotionHandoffMarkAsComplete?.(v)
                                }), y.current = !1), m.enteringChildren = void 0)
                            }), m
                        }(t, D, j, o, e.ProjectionNode)
                        return (0, l.jsxs)(c.Provider, {
                            value: O,
                            children: [C && O.visualElement ? (0, l.jsx)(C, {
                                visualElement: O.visualElement,
                                ...j
                            }) : null, function (t, e, r, {
                                latestValues: n
                            }, s, o = !1) {
                                let l = (a(t) ? function (t, e, r, n) {
                                    let s = (0, i.useMemo)(() => {
                                        let r = k();
                                        return (0, w.B)(r, e, (0, P.n)(n), t.transformTemplate, t.style), {
                                            ...r.attrs,
                                            style: {
                                                ...r.style
                                            }
                                        }
                                    }, [e]);
                                    if (t.style) {
                                        let e = {};
                                        x(e, t.style, t), s.style = {
                                            ...e,
                                            ...s.style
                                        }
                                    }
                                    return s
                                } : function (t, e) {
                                    let r = {},
                                        n = function (t, e) {
                                            let r = t.style || {},
                                                n = {};
                                            return x(n, r, t), Object.assign(n, function ({
                                                transformTemplate: t
                                            }, e) {
                                                return (0, i.useMemo)(() => {
                                                    let r = b();
                                                    return (0, y.O)(r, e, t), Object.assign({}, r.vars, r.style)
                                                }, [e])
                                            }(t, e)), n
                                        }(t, e);
                                    return t.drag && !1 !== t.dragListener && (r.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = n, r
                                })(e, n, s, t),
                                    u = function (t, e, r) {
                                        let i = {};
                                        for (let n in t) ("values" !== n || "object" != typeof t.values) && (A(n) || !0 === r && T(n) || !e && !T(n) || t.draggable && n.startsWith("onDrag")) && (i[n] = t[n]);
                                        return i
                                    }(e, "string" == typeof t, o),
                                    d = t !== i.Fragment ? {
                                        ...u,
                                        ...l,
                                        ref: r
                                    } : {},
                                    {
                                        children: h
                                    } = e,
                                    c = (0, i.useMemo)(() => (0, g.S)(h) ? h.get() : h, [h]);
                                return (0, i.createElement)(t, {
                                    ...d,
                                    children: c
                                })
                            }(t, e, (s = O.visualElement, (0, i.useCallback)(t => {
                                t && D.onMount && D.onMount(t), s && (t ? s.mount(t) : s.unmount()), r && ("function" == typeof r ? r(t) : B(r) && (r.current = t))
                            }, [s])), D, V, n)]
                        })
                    }
                    S.displayName = "motion.".concat("string" == typeof t ? t : "create(".concat(null != (r = null != (e = t.displayName) ? e : t.name) ? r : "", ")"));
                    const MotionComponent = (0, i.forwardRef)(S);
                    return MotionComponent[I] = t, MotionComponent
                }
                var W = r(419),
                    $ = r(7934);

                function G(t, e, r, i = 0, n = 1) {
                    let s = Array.from(t).sort((t, e) => t.sortNodePosition(e)).indexOf(e),
                        o = t.size,
                        a = (o - 1) * i;
                    return "function" == typeof r ? r(s, o) : 1 === n ? s * i : a - s * i
                }

                function q(t, e, r = {}) {
                    let i = (0, W.K)(t, e, "exit" === r.type ? t.presenceContext?.custom : void 0),
                        {
                            transition: n = t.getDefaultTransition() || {}
                        } = i || {};
                    r.transitionOverride && (n = r.transitionOverride);
                    let s = i ? () => Promise.all((0, $.$)(t, i, r)) : () => Promise.resolve(),
                        o = t.variantChildren && t.variantChildren.size ? (i = 0) => {
                            let {
                                delayChildren: s = 0,
                                staggerChildren: o,
                                staggerDirection: a
                            } = n;
                            return function (t, e, r = 0, i = 0, n = 0, s = 1, o) {
                                let a = [];
                                for (let l of t.variantChildren) l.notify("AnimationStart", e), a.push(q(l, e, {
                                    ...o,
                                    delay: r + ("function" == typeof i ? 0 : i) + G(t.variantChildren, l, i, n, s)
                                }).then(() => l.notify("AnimationComplete", e)));
                                return Promise.all(a)
                            }(t, e, i, s, o, a, r)
                        } : () => Promise.resolve(),
                        {
                            when: a
                        } = n;
                    if (!a) return Promise.all([s(), o(r.delay)]); {
                        let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
                        return t().then(() => e())
                    }
                }
                var K = r(5910);

                function X(t, e) {
                    if (!Array.isArray(e)) return !1;
                    let r = e.length;
                    if (r !== t.length) return !1;
                    for (let i = 0; i < r; i++)
                        if (e[i] !== t[i]) return !1;
                    return !0
                }
                var H = r(8312);
                let Y = H._.length,
                    Q = [...H.U].reverse(),
                    Z = H.U.length;

                function J(t = !1) {
                    return {
                        isActive: t,
                        protectedKeys: {},
                        needsAnimating: {},
                        prevResolvedValues: {}
                    }
                }

                function tt() {
                    return {
                        animate: J(!0),
                        whileInView: J(),
                        whileHover: J(),
                        whileTap: J(),
                        whileDrag: J(),
                        whileFocus: J(),
                        exit: J()
                    }
                }
                class te {
                    constructor(t) {
                        this.isMounted = !1, this.node = t
                    }
                    update() { }
                }
                class tr extends te {
                    constructor(t) {
                        super(t), t.animationState || (t.animationState = function (t) {
                            let e = e => Promise.all(e.map(({
                                animation: e,
                                options: r
                            }) => (function (t, e, r = {}) {
                                let i;
                                if (t.notify("AnimationStart", e), Array.isArray(e)) i = Promise.all(e.map(e => q(t, e, r)));
                                else if ("string" == typeof e) i = q(t, e, r);
                                else {
                                    let n = "function" == typeof e ? (0, W.K)(t, e, r.custom) : e;
                                    i = Promise.all((0, $.$)(t, n, r))
                                }
                                return i.then(() => {
                                    t.notify("AnimationComplete", e)
                                })
                            })(t, e, r))),
                                r = tt(),
                                i = !0,
                                n = e => (r, i) => {
                                    let n = (0, W.K)(t, i, "exit" === e ? t.presenceContext?.custom : void 0);
                                    if (n) {
                                        let {
                                            transition: t,
                                            transitionEnd: e,
                                            ...i
                                        } = n;
                                        r = {
                                            ...r,
                                            ...i,
                                            ...e
                                        }
                                    }
                                    return r
                                };

                            function s(s) {
                                let {
                                    props: o
                                } = t, a = function t(e) {
                                    if (!e) return;
                                    if (!e.isControllingVariants) {
                                        let r = e.parent && t(e.parent) || {};
                                        return void 0 !== e.props.initial && (r.initial = e.props.initial), r
                                    }
                                    let r = {};
                                    for (let t = 0; t < Y; t++) {
                                        let i = H._[t],
                                            n = e.props[i];
                                        ((0, m.w)(n) || !1 === n) && (r[i] = n)
                                    }
                                    return r
                                }(t.parent) || {}, l = [], u = new Set, d = {}, h = 1 / 0;
                                for (let e = 0; e < Z; e++) {
                                    var c, p;
                                    let f = Q[e],
                                        g = r[f],
                                        v = void 0 !== o[f] ? o[f] : a[f],
                                        y = (0, m.w)(v),
                                        b = f === s ? g.isActive : null;
                                    !1 === b && (h = e);
                                    let x = v === a[f] && v !== o[f] && y;
                                    if (x && i && t.manuallyAnimateOnMount && (x = !1), g.protectedKeys = {
                                        ...d
                                    }, !g.isActive && null === b || !v && !g.prevProp || (0, E.N)(v) || "boolean" == typeof v) continue;
                                    let w = (c = g.prevProp, "string" == typeof (p = v) ? p !== c : !!Array.isArray(p) && !X(p, c)),
                                        k = w || f === s && g.isActive && !x && y || e > h && y,
                                        P = !1,
                                        S = Array.isArray(v) ? v : [v],
                                        T = S.reduce(n(f), {});
                                    !1 === b && (T = {});
                                    let {
                                        prevResolvedValues: A = {}
                                    } = g, M = {
                                        ...A,
                                        ...T
                                    }, C = e => {
                                        k = !0, u.has(e) && (P = !0, u.delete(e)), g.needsAnimating[e] = !0;
                                        let r = t.getValue(e);
                                        r && (r.liveStyle = !1)
                                    };
                                    for (let t in M) {
                                        let e = T[t],
                                            r = A[t];
                                        if (d.hasOwnProperty(t)) continue;
                                        let i = !1;
                                        ((0, K.p)(e) && (0, K.p)(r) ? X(e, r) : e === r) ? void 0 !== e && u.has(t) ? C(t) : g.protectedKeys[t] = !0 : null != e ? C(t) : u.add(t)
                                    }
                                    g.prevProp = v, g.prevResolvedValues = T, g.isActive && (d = {
                                        ...d,
                                        ...T
                                    }), i && t.blockInitialAnimation && (k = !1);
                                    let j = x && w,
                                        V = !j || P;
                                    k && V && l.push(...S.map(e => {
                                        let r = {
                                            type: f
                                        };
                                        if ("string" == typeof e && i && !j && t.manuallyAnimateOnMount && t.parent) {
                                            let {
                                                parent: i
                                            } = t, n = (0, W.K)(i, e);
                                            if (i.enteringChildren && n) {
                                                let {
                                                    delayChildren: e
                                                } = n.transition || {};
                                                r.delay = G(i.enteringChildren, t, e)
                                            }
                                        }
                                        return {
                                            animation: e,
                                            options: r
                                        }
                                    }))
                                }
                                if (u.size) {
                                    let e = {};
                                    if ("boolean" != typeof o.initial) {
                                        let r = (0, W.K)(t, Array.isArray(o.initial) ? o.initial[0] : o.initial);
                                        r && r.transition && (e.transition = r.transition)
                                    }
                                    u.forEach(r => {
                                        let i = t.getBaseTarget(r),
                                            n = t.getValue(r);
                                        n && (n.liveStyle = !0), e[r] = i ?? null
                                    }), l.push({
                                        animation: e
                                    })
                                }
                                let f = !!l.length;
                                return i && (!1 === o.initial || o.initial === o.animate) && !t.manuallyAnimateOnMount && (f = !1), i = !1, f ? e(l) : Promise.resolve()
                            }
                            return {
                                animateChanges: s,
                                setActive: function (e, i) {
                                    if (r[e].isActive === i) return Promise.resolve();
                                    t.variantChildren?.forEach(t => t.animationState?.setActive(e, i)), r[e].isActive = i;
                                    let n = s(e);
                                    for (let t in r) r[t].protectedKeys = {};
                                    return n
                                },
                                setAnimateFunction: function (r) {
                                    e = r(t)
                                },
                                getState: () => r,
                                reset: () => {
                                    r = tt(), i = !0
                                }
                            }
                        }(t))
                    }
                    updateAnimationControlsSubscription() {
                        let {
                            animate: t
                        } = this.node.getProps();
                        (0, E.N)(t) && (this.unmountControls = t.subscribe(this.node))
                    }
                    mount() {
                        this.updateAnimationControlsSubscription()
                    }
                    update() {
                        let {
                            animate: t
                        } = this.node.getProps(), {
                            animate: e
                        } = this.node.prevProps || {};
                        t !== e && this.updateAnimationControlsSubscription()
                    }
                    unmount() {
                        this.node.animationState.reset(), this.unmountControls?.()
                    }
                }
                let ti = 0;
                class tn extends te {
                    constructor() {
                        super(...arguments), this.id = ti++
                    }
                    update() {
                        if (!this.node.presenceContext) return;
                        let {
                            isPresent: t,
                            onExitComplete: e
                        } = this.node.presenceContext, {
                            isPresent: r
                        } = this.node.prevPresenceContext || {};
                        if (!this.node.animationState || t === r) return;
                        let i = this.node.animationState.setActive("exit", !t);
                        e && !t && i.then(() => {
                            e(this.id)
                        })
                    }
                    mount() {
                        let {
                            register: t,
                            onExitComplete: e
                        } = this.node.presenceContext || {};
                        e && e(this.id), t && (this.unmount = t(this.id))
                    }
                    unmount() { }
                }
                var ts = r(9827);
                let to = {
                    x: !1,
                    y: !1
                };
                var ta = r(4158),
                    tl = r(9515),
                    tu = r(3210),
                    td = r(4542),
                    th = r(9952);

                function tc(t, e, r, i = {
                    passive: !0
                }) {
                    return t.addEventListener(e, r, i), () => t.removeEventListener(e, r)
                }
                let tp = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

                function tm(t) {
                    return {
                        point: {
                            x: t.pageX,
                            y: t.pageY
                        }
                    }
                }
                let tf = t => e => tp(e) && t(e, tm(e));

                function tg(t, e, r, i) {
                    return tc(t, e, tf(r), i)
                }
                var tv = r(8588);

                function ty(t) {
                    return t.max - t.min
                }

                function tb(t, e, r, i = .5) {
                    t.origin = i, t.originPoint = (0, tu.k)(e.min, e.max, t.origin), t.scale = ty(r) / ty(e), t.translate = (0, tu.k)(r.min, r.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
                }

                function tx(t, e, r, i) {
                    tb(t.x, e.x, r.x, i ? i.originX : void 0), tb(t.y, e.y, r.y, i ? i.originY : void 0)
                }

                function tw(t, e, r) {
                    t.min = r.min + e.min, t.max = t.min + ty(e)
                }

                function tk(t, e, r) {
                    t.min = e.min - r.min, t.max = t.min + ty(e)
                }

                function tP(t, e, r) {
                    tk(t.x, e.x, r.x), tk(t.y, e.y, r.y)
                }
                var tS = r(1786);

                function tT(t) {
                    return [t("x"), t("y")]
                }
                var tA = r(3757);
                let tE = ({
                    current: t
                }) => t ? t.ownerDocument.defaultView : null;
                var tM = r(6333),
                    tC = r(3191),
                    tj = r(7215);
                let tV = (t, e) => Math.abs(t - e);
                class tO {
                    constructor(t, e, {
                        transformPagePoint: r,
                        contextWindow: i = window,
                        dragSnapToOrigin: n = !1,
                        distanceThreshold: s = 3
                    } = {}) {
                        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = tL(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                r = function (t, e) {
                                    return Math.sqrt(tV(t.x, e.x) ** 2 + tV(t.y, e.y) ** 2)
                                }(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= this.distanceThreshold;
                            if (!e && !r) return;
                            let {
                                point: i
                            } = t, {
                                timestamp: n
                            } = tl.uv;
                            this.history.push({
                                ...i,
                                timestamp: n
                            });
                            let {
                                onStart: s,
                                onMove: o
                            } = this.handlers;
                            e || (s && s(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = tD(e, this.transformPagePoint), tl.Gt.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: r,
                                onSessionEnd: i,
                                resumeAnimation: n
                            } = this.handlers;
                            if (this.dragSnapToOrigin && n && n(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let s = tL("pointercancel" === t.type ? this.lastMoveEventInfo : tD(e, this.transformPagePoint), this.history);
                            this.startEvent && r && r(t, s), i && i(t, s)
                        }, !tp(t)) return;
                        this.dragSnapToOrigin = n, this.handlers = e, this.transformPagePoint = r, this.distanceThreshold = s, this.contextWindow = i || window;
                        let o = tD(tm(t), this.transformPagePoint),
                            {
                                point: a
                            } = o,
                            {
                                timestamp: l
                            } = tl.uv;
                        this.history = [{
                            ...a,
                            timestamp: l
                        }];
                        let {
                            onSessionStart: u
                        } = e;
                        u && u(t, tL(o, this.history)), this.removeListeners = (0, tC.F)(tg(this.contextWindow, "pointermove", this.handlePointerMove), tg(this.contextWindow, "pointerup", this.handlePointerUp), tg(this.contextWindow, "pointercancel", this.handlePointerUp))
                    }
                    updateHandlers(t) {
                        this.handlers = t
                    }
                    end() {
                        this.removeListeners && this.removeListeners(), (0, tl.WG)(this.updatePoint)
                    }
                }

                function tD(t, e) {
                    return e ? {
                        point: e(t.point)
                    } : t
                }

                function tR(t, e) {
                    return {
                        x: t.x - e.x,
                        y: t.y - e.y
                    }
                }

                function tL({
                    point: t
                }, e) {
                    return {
                        point: t,
                        delta: tR(t, tF(e)),
                        offset: tR(t, e[0]),
                        velocity: function (t, e) {
                            if (t.length < 2) return {
                                x: 0,
                                y: 0
                            };
                            let r = t.length - 1,
                                i = null,
                                n = tF(t);
                            for (; r >= 0 && (i = t[r], !(n.timestamp - i.timestamp > (0, tj.f)(.1)));) r--;
                            if (!i) return {
                                x: 0,
                                y: 0
                            };
                            let s = (0, tj.X)(n.timestamp - i.timestamp);
                            if (0 === s) return {
                                x: 0,
                                y: 0
                            };
                            let o = {
                                x: (n.x - i.x) / s,
                                y: (n.y - i.y) / s
                            };
                            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                        }(e, .1)
                    }
                }

                function tF(t) {
                    return t[t.length - 1]
                }
                var tI = r(5818),
                    tB = r(1297);

                function t_(t, e, r) {
                    return {
                        min: void 0 !== e ? t.min + e : void 0,
                        max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0
                    }
                }

                function tz(t, e) {
                    let r = e.min - t.min,
                        i = e.max - t.max;
                    return e.max - e.min < t.max - t.min && ([r, i] = [i, r]), {
                        min: r,
                        max: i
                    }
                }

                function tN(t, e, r) {
                    return {
                        min: tU(t, e),
                        max: tU(t, r)
                    }
                }

                function tU(t, e) {
                    return "number" == typeof t ? t : t[e] || 0
                }
                let tW = new WeakMap;
                class t$ {
                    constructor(t) {
                        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                            x: 0,
                            y: 0
                        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, tS.ge)(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
                    }
                    start(t, {
                        snapToCursor: e = !1,
                        distanceThreshold: r
                    } = {}) {
                        let {
                            presenceContext: i
                        } = this.visualElement;
                        if (i && !1 === i.isPresent) return;
                        let {
                            dragSnapToOrigin: n
                        } = this.getProps();
                        this.panSession = new tO(t, {
                            onSessionStart: t => {
                                let {
                                    dragSnapToOrigin: r
                                } = this.getProps();
                                r ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(tm(t).point)
                            },
                            onStart: (t, e) => {
                                let {
                                    drag: r,
                                    dragPropagation: i,
                                    onDragStart: n
                                } = this.getProps();
                                if (r && !i && (this.openDragLock && this.openDragLock(), this.openDragLock = function (t) {
                                    if ("x" === t || "y" === t)
                                        if (to[t]) return null;
                                        else return to[t] = !0, () => {
                                            to[t] = !1
                                        };
                                    return to.x || to.y ? null : (to.x = to.y = !0, () => {
                                        to.x = to.y = !1
                                    })
                                }(r), !this.openDragLock)) return;
                                this.latestPointerEvent = t, this.latestPanInfo = e, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), tT(t => {
                                    let e = this.getAxisMotionValue(t).get() || 0;
                                    if (ta.KN.test(e)) {
                                        let {
                                            projection: r
                                        } = this.visualElement;
                                        if (r && r.layout) {
                                            let i = r.layout.layoutBox[t];
                                            i && (e = ty(i) * (parseFloat(e) / 100))
                                        }
                                    }
                                    this.originPoint[t] = e
                                }), n && tl.Gt.postRender(() => n(t, e)), (0, tM.g)(this.visualElement, "transform");
                                let {
                                    animationState: s
                                } = this.visualElement;
                                s && s.setActive("whileDrag", !0)
                            },
                            onMove: (t, e) => {
                                this.latestPointerEvent = t, this.latestPanInfo = e;
                                let {
                                    dragPropagation: r,
                                    dragDirectionLock: i,
                                    onDirectionLock: n,
                                    onDrag: s
                                } = this.getProps();
                                if (!r && !this.openDragLock) return;
                                let {
                                    offset: o
                                } = e;
                                if (i && null === this.currentDirection) {
                                    this.currentDirection = function (t, e = 10) {
                                        let r = null;
                                        return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"), r
                                    }(o), null !== this.currentDirection && n && n(this.currentDirection);
                                    return
                                }
                                this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                            },
                            onSessionEnd: (t, e) => {
                                this.latestPointerEvent = t, this.latestPanInfo = e, this.stop(t, e), this.latestPointerEvent = null, this.latestPanInfo = null
                            },
                            resumeAnimation: () => tT(t => "paused" === this.getAnimationState(t) && this.getAxisMotionValue(t).animation?.play())
                        }, {
                            transformPagePoint: this.visualElement.getTransformPagePoint(),
                            dragSnapToOrigin: n,
                            distanceThreshold: r,
                            contextWindow: tE(this.visualElement)
                        })
                    }
                    stop(t, e) {
                        let r = t || this.latestPointerEvent,
                            i = e || this.latestPanInfo,
                            n = this.isDragging;
                        if (this.cancel(), !n || !i || !r) return;
                        let {
                            velocity: s
                        } = i;
                        this.startAnimation(s);
                        let {
                            onDragEnd: o
                        } = this.getProps();
                        o && tl.Gt.postRender(() => o(r, i))
                    }
                    cancel() {
                        this.isDragging = !1;
                        let {
                            projection: t,
                            animationState: e
                        } = this.visualElement;
                        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                        let {
                            dragPropagation: r
                        } = this.getProps();
                        !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
                    }
                    updateAxis(t, e, r) {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!r || !tG(t, i, this.currentDirection)) return;
                        let n = this.getAxisMotionValue(t),
                            s = this.originPoint[t] + r[t];
                        this.constraints && this.constraints[t] && (s = function (t, {
                            min: e,
                            max: r
                        }, i) {
                            return void 0 !== e && t < e ? t = i ? (0, tu.k)(e, t, i.min) : Math.max(t, e) : void 0 !== r && t > r && (t = i ? (0, tu.k)(r, t, i.max) : Math.min(t, r)), t
                        }(s, this.constraints[t], this.elastic[t])), n.set(s)
                    }
                    resolveConstraints() {
                        let {
                            dragConstraints: t,
                            dragElastic: e
                        } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, i = this.constraints;
                        t && B(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = function (t, {
                            top: e,
                            left: r,
                            bottom: i,
                            right: n
                        }) {
                            return {
                                x: t_(t.x, r, n),
                                y: t_(t.y, e, i)
                            }
                        }(r.layoutBox, t) : this.constraints = !1, this.elastic = function (t = .35) {
                            return !1 === t ? t = 0 : !0 === t && (t = .35), {
                                x: tN(t, "left", "right"),
                                y: tN(t, "top", "bottom")
                            }
                        }(e), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && tT(t => {
                            !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function (t, e) {
                                let r = {};
                                return void 0 !== e.min && (r.min = e.min - t.min), void 0 !== e.max && (r.max = e.max - t.min), r
                            }(r.layoutBox[t], this.constraints[t]))
                        })
                    }
                    resolveRefConstraints() {
                        var t;
                        let {
                            dragConstraints: e,
                            onMeasureDragConstraints: r
                        } = this.getProps();
                        if (!e || !B(e)) return !1;
                        let i = e.current;
                        (0, td.V)(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
                        let {
                            projection: n
                        } = this.visualElement;
                        if (!n || !n.layout) return !1;
                        let s = (0, tA.L)(i, n.root, this.visualElement.getTransformPagePoint()),
                            o = (t = n.layout.layoutBox, {
                                x: tz(t.x, s.x),
                                y: tz(t.y, s.y)
                            });
                        if (r) {
                            let t = r((0, tv.pA)(o));
                            this.hasMutatedConstraints = !!t, t && (o = (0, tv.FY)(t))
                        }
                        return o
                    }
                    startAnimation(t) {
                        let {
                            drag: e,
                            dragMomentum: r,
                            dragElastic: i,
                            dragTransition: n,
                            dragSnapToOrigin: s,
                            onDragTransitionEnd: o
                        } = this.getProps(), a = this.constraints || {};
                        return Promise.all(tT(o => {
                            if (!tG(o, e, this.currentDirection)) return;
                            let l = a && a[o] || {};
                            s && (l = {
                                min: 0,
                                max: 0
                            });
                            let u = {
                                type: "inertia",
                                velocity: r ? t[o] : 0,
                                bounceStiffness: i ? 200 : 1e6,
                                bounceDamping: i ? 40 : 1e7,
                                timeConstant: 750,
                                restDelta: 1,
                                restSpeed: 10,
                                ...n,
                                ...l
                            };
                            return this.startAxisValueAnimation(o, u)
                        })).then(o)
                    }
                    startAxisValueAnimation(t, e) {
                        let r = this.getAxisMotionValue(t);
                        return (0, tM.g)(this.visualElement, t), r.start((0, th.f)(t, r, 0, e, this.visualElement, !1))
                    }
                    stopAnimation() {
                        tT(t => this.getAxisMotionValue(t).stop())
                    }
                    pauseAnimation() {
                        tT(t => this.getAxisMotionValue(t).animation?.pause())
                    }
                    getAnimationState(t) {
                        return this.getAxisMotionValue(t).animation?.state
                    }
                    getAxisMotionValue(t) {
                        let e = `_drag${t.toUpperCase()}`,
                            r = this.visualElement.getProps();
                        return r[e] || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
                    }
                    snapToCursor(t) {
                        tT(e => {
                            let {
                                drag: r
                            } = this.getProps();
                            if (!tG(e, r, this.currentDirection)) return;
                            let {
                                projection: i
                            } = this.visualElement, n = this.getAxisMotionValue(e);
                            if (i && i.layout) {
                                let {
                                    min: r,
                                    max: s
                                } = i.layout.layoutBox[e];
                                n.set(t[e] - (0, tu.k)(r, s, .5))
                            }
                        })
                    }
                    scalePositionWithinConstraints() {
                        if (!this.visualElement.current) return;
                        let {
                            drag: t,
                            dragConstraints: e
                        } = this.getProps(), {
                            projection: r
                        } = this.visualElement;
                        if (!B(e) || !r || !this.constraints) return;
                        this.stopAnimation();
                        let i = {
                            x: 0,
                            y: 0
                        };
                        tT(t => {
                            let e = this.getAxisMotionValue(t);
                            if (e && !1 !== this.constraints) {
                                let r = e.get();
                                i[t] = function (t, e) {
                                    let r = .5,
                                        i = ty(t),
                                        n = ty(e);
                                    return n > i ? r = (0, tI.q)(e.min, e.max - i, t.min) : i > n && (r = (0, tI.q)(t.min, t.max - n, e.min)), (0, tB.q)(0, 1, r)
                                }({
                                    min: r,
                                    max: r
                                }, this.constraints[t])
                            }
                        });
                        let {
                            transformTemplate: n
                        } = this.visualElement.getProps();
                        this.visualElement.current.style.transform = n ? n({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), tT(e => {
                            if (!tG(e, t, null)) return;
                            let r = this.getAxisMotionValue(e),
                                {
                                    min: n,
                                    max: s
                                } = this.constraints[e];
                            r.set((0, tu.k)(n, s, i[e]))
                        })
                    }
                    addListeners() {
                        if (!this.visualElement.current) return;
                        tW.set(this.visualElement, this);
                        let t = tg(this.visualElement.current, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: r = !0
                            } = this.getProps();
                            e && r && this.start(t)
                        }),
                            e = () => {
                                let {
                                    dragConstraints: t
                                } = this.getProps();
                                B(t) && t.current && (this.constraints = this.resolveRefConstraints())
                            },
                            {
                                projection: r
                            } = this.visualElement,
                            i = r.addEventListener("measure", e);
                        r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), tl.Gt.read(e);
                        let n = tc(window, "resize", () => this.scalePositionWithinConstraints()),
                            s = r.addEventListener("didUpdate", ({
                                delta: t,
                                hasLayoutChanged: e
                            }) => {
                                this.isDragging && e && (tT(e => {
                                    let r = this.getAxisMotionValue(e);
                                    r && (this.originPoint[e] += t[e].translate, r.set(r.get() + t[e].translate))
                                }), this.visualElement.render())
                            });
                        return () => {
                            n(), t(), i(), s && s()
                        }
                    }
                    getProps() {
                        let t = this.visualElement.getProps(),
                            {
                                drag: e = !1,
                                dragDirectionLock: r = !1,
                                dragPropagation: i = !1,
                                dragConstraints: n = !1,
                                dragElastic: s = .35,
                                dragMomentum: o = !0
                            } = t;
                        return {
                            ...t,
                            drag: e,
                            dragDirectionLock: r,
                            dragPropagation: i,
                            dragConstraints: n,
                            dragElastic: s,
                            dragMomentum: o
                        }
                    }
                }

                function tG(t, e, r) {
                    return (!0 === e || e === t) && (null === r || r === t)
                }
                class tq extends te {
                    constructor(t) {
                        super(t), this.removeGroupControls = ts.l, this.removeListeners = ts.l, this.controls = new t$(t)
                    }
                    mount() {
                        let {
                            dragControls: t
                        } = this.node.getProps();
                        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ts.l
                    }
                    unmount() {
                        this.removeGroupControls(), this.removeListeners()
                    }
                }
                let tK = t => (e, r) => {
                    t && tl.Gt.postRender(() => t(e, r))
                };
                class tX extends te {
                    constructor() {
                        super(...arguments), this.removePointerDownListener = ts.l
                    }
                    onPointerDown(t) {
                        this.session = new tO(t, this.createPanHandlers(), {
                            transformPagePoint: this.node.getTransformPagePoint(),
                            contextWindow: tE(this.node)
                        })
                    }
                    createPanHandlers() {
                        let {
                            onPanSessionStart: t,
                            onPanStart: e,
                            onPan: r,
                            onPanEnd: i
                        } = this.node.getProps();
                        return {
                            onSessionStart: tK(t),
                            onStart: tK(e),
                            onMove: r,
                            onEnd: (t, e) => {
                                delete this.session, i && tl.Gt.postRender(() => i(t, e))
                            }
                        }
                    }
                    mount() {
                        this.removePointerDownListener = tg(this.node.current, "pointerdown", t => this.onPointerDown(t))
                    }
                    update() {
                        this.session && this.session.updateHandlers(this.createPanHandlers())
                    }
                    unmount() {
                        this.removePointerDownListener(), this.session && this.session.end()
                    }
                }
                var tH = r(7123),
                    tY = r(2082);
                let tQ = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

                function tZ(t, e) {
                    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
                }
                let tJ = {
                    correct: (t, e) => {
                        if (!e.target) return t;
                        if ("string" == typeof t)
                            if (!ta.px.test(t)) return t;
                            else t = parseFloat(t);
                        let r = tZ(t, e.target.x),
                            i = tZ(t, e.target.y);
                        return `${r}% ${i}%`
                    }
                };
                var t0 = r(10),
                    t1 = r(637);
                let t2 = !1;
                class t5 extends i.Component {
                    componentDidMount() {
                        let {
                            visualElement: t,
                            layoutGroup: e,
                            switchLayoutGroup: r,
                            layoutId: i
                        } = this.props, {
                            projection: n
                        } = t;
                        (0, t1.$)(t8), n && (e.group && e.group.add(n), r && r.register && i && r.register(n), t2 && n.root.didUpdate(), n.addEventListener("animationComplete", () => {
                            this.safeToRemove()
                        }), n.setOptions({
                            ...n.options,
                            onExitComplete: () => this.safeToRemove()
                        })), tQ.hasEverUpdated = !0
                    }
                    getSnapshotBeforeUpdate(t) {
                        let {
                            layoutDependency: e,
                            visualElement: r,
                            drag: i,
                            isPresent: n
                        } = this.props, {
                            projection: s
                        } = r;
                        return s && (s.isPresent = n, t2 = !0, i || t.layoutDependency !== e || void 0 === e || t.isPresent !== n ? s.willUpdate() : this.safeToRemove(), t.isPresent !== n && (n ? s.promote() : s.relegate() || tl.Gt.postRender(() => {
                            let t = s.getStack();
                            t && t.members.length || this.safeToRemove()
                        }))), null
                    }
                    componentDidUpdate() {
                        let {
                            projection: t
                        } = this.props.visualElement;
                        t && (t.root.didUpdate(), tH.k.postRender(() => {
                            !t.currentAnimation && t.isLead() && this.safeToRemove()
                        }))
                    }
                    componentWillUnmount() {
                        let {
                            visualElement: t,
                            layoutGroup: e,
                            switchLayoutGroup: r
                        } = this.props, {
                            projection: i
                        } = t;
                        t2 = !0, i && (i.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(i), r && r.deregister && r.deregister(i))
                    }
                    safeToRemove() {
                        let {
                            safeToRemove: t
                        } = this.props;
                        t && t()
                    }
                    render() {
                        return null
                    }
                }

                function t3(t) {
                    let [e, r] = (0, tY.xQ)(), n = (0, i.useContext)(u.L);
                    return (0, l.jsx)(t5, {
                        ...t,
                        layoutGroup: n,
                        switchLayoutGroup: (0, i.useContext)(z),
                        isPresent: e,
                        safeToRemove: r
                    })
                }
                let t8 = {
                    borderRadius: {
                        ...tJ,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: tJ,
                    borderTopRightRadius: tJ,
                    borderBottomLeftRadius: tJ,
                    borderBottomRightRadius: tJ,
                    boxShadow: {
                        correct: (t, {
                            treeScale: e,
                            projectionDelta: r
                        }) => {
                            let i = t0.f.parse(t);
                            if (i.length > 5) return t;
                            let n = t0.f.createTransformer(t),
                                s = +("number" != typeof i[0]),
                                o = r.x.scale * e.x,
                                a = r.y.scale * e.y;
                            i[0 + s] /= o, i[1 + s] /= a;
                            let l = (0, tu.k)(o, a, .5);
                            return "number" == typeof i[2 + s] && (i[2 + s] /= l), "number" == typeof i[3 + s] && (i[3 + s] /= l), n(i)
                        }
                    }
                };
                var t4 = r(4744),
                    t6 = r(9782),
                    t9 = r(5943),
                    t7 = r(8777),
                    et = r(4261),
                    ee = r(3704),
                    er = r(98),
                    ei = r(5626),
                    en = r(5580),
                    es = r(6926),
                    eo = r(6668);
                let ea = (t, e) => t.depth - e.depth;
                class el {
                    constructor() {
                        this.children = [], this.isDirty = !1
                    }
                    add(t) {
                        (0, eo.Kq)(this.children, t), this.isDirty = !0
                    }
                    remove(t) {
                        (0, eo.Ai)(this.children, t), this.isDirty = !0
                    }
                    forEach(t) {
                        this.isDirty && this.children.sort(ea), this.isDirty = !1, this.children.forEach(t)
                    }
                }
                var eu = r(7712);
                let ed = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                    eh = ed.length,
                    ec = t => "string" == typeof t ? parseFloat(t) : t,
                    ep = t => "number" == typeof t || ta.px.test(t);

                function em(t, e) {
                    return void 0 !== t[e] ? t[e] : t.borderRadius
                }
                let ef = ev(0, .5, eu.yT),
                    eg = ev(.5, .95, ts.l);

                function ev(t, e, r) {
                    return i => i < t ? 0 : i > e ? 1 : r((0, tI.q)(t, e, i))
                }

                function ey(t, e) {
                    t.min = e.min, t.max = e.max
                }

                function eb(t, e) {
                    ey(t.x, e.x), ey(t.y, e.y)
                }

                function ex(t, e) {
                    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
                }
                var ew = r(6147);

                function ek(t, e, r, i, n) {
                    return t -= e, t = (0, ew.hq)(t, 1 / r, i), void 0 !== n && (t = (0, ew.hq)(t, 1 / n, i)), t
                }

                function eP(t, e, [r, i, n], s, o) {
                    ! function (t, e = 0, r = 1, i = .5, n, s = t, o = t) {
                        if (ta.KN.test(e) && (e = parseFloat(e), e = (0, tu.k)(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
                        let a = (0, tu.k)(s.min, s.max, i);
                        t === s && (a -= e), t.min = ek(t.min, e, r, a, n), t.max = ek(t.max, e, r, a, n)
                    }(t, e[r], e[i], e[n], e.scale, s, o)
                }
                let eS = ["x", "scaleX", "originX"],
                    eT = ["y", "scaleY", "originY"];

                function eA(t, e, r, i) {
                    eP(t.x, e, eS, r ? r.x : void 0, i ? i.x : void 0), eP(t.y, e, eT, r ? r.y : void 0, i ? i.y : void 0)
                }

                function eE(t) {
                    return 0 === t.translate && 1 === t.scale
                }

                function eM(t) {
                    return eE(t.x) && eE(t.y)
                }

                function eC(t, e) {
                    return t.min === e.min && t.max === e.max
                }

                function ej(t, e) {
                    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
                }

                function eV(t, e) {
                    return ej(t.x, e.x) && ej(t.y, e.y)
                }

                function eO(t) {
                    return ty(t.x) / ty(t.y)
                }

                function eD(t, e) {
                    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
                }
                class eR {
                    constructor() {
                        this.members = []
                    }
                    add(t) {
                        (0, eo.Kq)(this.members, t), t.scheduleRender()
                    }
                    remove(t) {
                        if ((0, eo.Ai)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                            let t = this.members[this.members.length - 1];
                            t && this.promote(t)
                        }
                    }
                    relegate(t) {
                        let e, r = this.members.findIndex(e => t === e);
                        if (0 === r) return !1;
                        for (let t = r; t >= 0; t--) {
                            let r = this.members[t];
                            if (!1 !== r.isPresent) {
                                e = r;
                                break
                            }
                        }
                        return !!e && (this.promote(e), !0)
                    }
                    promote(t, e) {
                        let r = this.lead;
                        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
                            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, e && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                            let {
                                crossfade: i
                            } = t.options;
                            !1 === i && r.hide()
                        }
                    }
                    exitAnimationComplete() {
                        this.members.forEach(t => {
                            let {
                                options: e,
                                resumingFrom: r
                            } = t;
                            e.onExitComplete && e.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
                        })
                    }
                    scheduleRender() {
                        this.members.forEach(t => {
                            t.instance && t.scheduleRender(!1)
                        })
                    }
                    removeLeadSnapshot() {
                        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                    }
                }
                var eL = r(2662);
                let eF = {
                    nodes: 0,
                    calculatedTargetDeltas: 0,
                    calculatedProjections: 0
                },
                    eI = ["", "X", "Y", "Z"],
                    eB = 0;

                function e_(t, e, r, i) {
                    let {
                        latestValues: n
                    } = e;
                    n[t] && (r[t] = n[t], e.setStaticValue(t, 0), i && (i[t] = 0))
                }

                function ez({
                    attachResizeListener: t,
                    defaultParent: e,
                    measureScroll: r,
                    checkIsScrollRoot: i,
                    resetTransform: n
                }) {
                    return class {
                        constructor(t = {}, r = e?.()) {
                            this.id = eB++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                                x: 1,
                                y: 1
                            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                            }, this.updateProjection = () => {
                                this.projectionUpdateScheduled = !1, t4.Q.value && (eF.nodes = eF.calculatedTargetDeltas = eF.calculatedProjections = 0), this.nodes.forEach(eW), this.nodes.forEach(eY), this.nodes.forEach(eQ), this.nodes.forEach(e$), t4.Q.addProjectionMetrics && t4.Q.addProjectionMetrics(eF)
                            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0;
                            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                            this.root === this && (this.nodes = new el)
                        }
                        addEventListener(t, e) {
                            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new ei.v), this.eventHandlers.get(t).add(e)
                        }
                        notifyListeners(t, ...e) {
                            let r = this.eventHandlers.get(t);
                            r && r.notify(...e)
                        }
                        hasListeners(t) {
                            return this.eventHandlers.has(t)
                        }
                        mount(e) {
                            if (this.instance) return;
                            this.isSVG = (0, t6.x)(e) && !(0, t9.h)(e), this.instance = e;
                            let {
                                layoutId: r,
                                layout: i,
                                visualElement: n
                            } = this.options;
                            if (n && !n.current && n.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (i || r) && (this.isLayoutDirty = !0), t) {
                                let r, i = 0,
                                    n = () => this.root.updateBlockedByResize = !1;
                                tl.Gt.read(() => {
                                    i = window.innerWidth
                                }), t(e, () => {
                                    let t = window.innerWidth;
                                    t !== i && (i = t, this.root.updateBlockedByResize = !0, r && r(), r = function (t, e) {
                                        let r = et.k.now(),
                                            i = ({
                                                timestamp: n
                                            }) => {
                                                let s = n - r;
                                                s >= 250 && ((0, tl.WG)(i), t(s - e))
                                            };
                                        return tl.Gt.setup(i, !0), () => (0, tl.WG)(i)
                                    }(n, 250), tQ.hasAnimatedSinceResize && (tQ.hasAnimatedSinceResize = !1, this.nodes.forEach(eH)))
                                })
                            }
                            r && this.root.registerSharedNode(r, this), !1 !== this.options.animate && n && (r || i) && this.addEventListener("didUpdate", ({
                                delta: t,
                                hasLayoutChanged: e,
                                hasRelativeLayoutChanged: r,
                                layout: i
                            }) => {
                                if (this.isTreeAnimationBlocked()) {
                                    this.target = void 0, this.relativeTarget = void 0;
                                    return
                                }
                                let s = this.options.transition || n.getDefaultTransition() || e5,
                                    {
                                        onLayoutAnimationStart: o,
                                        onLayoutAnimationComplete: a
                                    } = n.getProps(),
                                    l = !this.targetLayout || !eV(this.targetLayout, i),
                                    u = !e && r;
                                if (this.options.layoutRoot || this.resumeFrom || u || e && (l || !this.currentAnimation)) {
                                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                                    let e = {
                                        ...(0, t7.r)(s, "layout"),
                                        onPlay: o,
                                        onComplete: a
                                    };
                                    (n.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e), this.setAnimationOrigin(t, u)
                                } else e || eH(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                                this.targetLayout = i
                            })
                        }
                        unmount() {
                            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                            let t = this.getStack();
                            t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), (0, tl.WG)(this.updateProjection)
                        }
                        blockUpdate() {
                            this.updateManuallyBlocked = !0
                        }
                        unblockUpdate() {
                            this.updateManuallyBlocked = !1
                        }
                        isUpdateBlocked() {
                            return this.updateManuallyBlocked || this.updateBlockedByResize
                        }
                        isTreeAnimationBlocked() {
                            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                        }
                        startUpdate() {
                            !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(eZ), this.animationId++)
                        }
                        getTransformTemplate() {
                            let {
                                visualElement: t
                            } = this.options;
                            return t && t.getProps().transformTemplate
                        }
                        willUpdate(t = !0) {
                            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                                this.options.onExitComplete && this.options.onExitComplete();
                                return
                            }
                            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                                if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                                let {
                                    visualElement: r
                                } = e.options;
                                if (!r) return;
                                let i = (0, es.P)(r);
                                if (window.MotionHasOptimisedAnimation(i, "transform")) {
                                    let {
                                        layout: t,
                                        layoutId: r
                                    } = e.options;
                                    window.MotionCancelOptimisedAnimation(i, "transform", tl.Gt, !(t || r))
                                }
                                let {
                                    parent: n
                                } = e;
                                n && !n.hasCheckedOptimisedAppear && t(n)
                            }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                            this.isLayoutDirty = !0;
                            for (let t = 0; t < this.path.length; t++) {
                                let e = this.path[t];
                                e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                            }
                            let {
                                layoutId: e,
                                layout: r
                            } = this.options;
                            if (void 0 === e && !r) return;
                            let i = this.getTransformTemplate();
                            this.prevTransformTemplateValue = i ? i(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                        }
                        update() {
                            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(eq);
                                return
                            }
                            if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(eK);
                            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(eX), this.nodes.forEach(eN), this.nodes.forEach(eU)) : this.nodes.forEach(eK), this.clearAllSnapshots();
                            let t = et.k.now();
                            tl.uv.delta = (0, tB.q)(0, 1e3 / 60, t - tl.uv.timestamp), tl.uv.timestamp = t, tl.uv.isProcessing = !0, tl.PP.update.process(tl.uv), tl.PP.preRender.process(tl.uv), tl.PP.render.process(tl.uv), tl.uv.isProcessing = !1
                        }
                        didUpdate() {
                            this.updateScheduled || (this.updateScheduled = !0, tH.k.read(this.scheduleUpdate))
                        }
                        clearAllSnapshots() {
                            this.nodes.forEach(eG), this.sharedNodes.forEach(eJ)
                        }
                        scheduleUpdateProjection() {
                            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, tl.Gt.preRender(this.updateProjection, !1, !0))
                        }
                        scheduleCheckAfterUnmount() {
                            tl.Gt.postRender(() => {
                                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                            })
                        }
                        updateSnapshot() {
                            !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || ty(this.snapshot.measuredBox.x) || ty(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
                        }
                        updateLayout() {
                            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                            if (this.resumeFrom && !this.resumeFrom.instance)
                                for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                            let t = this.layout;
                            this.layout = this.measure(!1), this.layoutCorrected = (0, tS.ge)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                            let {
                                visualElement: e
                            } = this.options;
                            e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                        }
                        updateScroll(t = "measure") {
                            let e = !!(this.options.layoutScroll && this.instance);
                            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && this.instance) {
                                let e = i(this.instance);
                                this.scroll = {
                                    animationId: this.root.animationId,
                                    phase: t,
                                    isRoot: e,
                                    offset: r(this.instance),
                                    wasRoot: this.scroll ? this.scroll.isRoot : e
                                }
                            }
                        }
                        resetTransform() {
                            if (!n) return;
                            let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                                e = this.projectionDelta && !eM(this.projectionDelta),
                                r = this.getTransformTemplate(),
                                i = r ? r(this.latestValues, "") : void 0,
                                s = i !== this.prevTransformTemplateValue;
                            t && this.instance && (e || (0, eL.HD)(this.latestValues) || s) && (n(this.instance, i), this.shouldResetTransform = !1, this.scheduleRender())
                        }
                        measure(t = !0) {
                            var e;
                            let r = this.measurePageBox(),
                                i = this.removeElementScroll(r);
                            return t && (i = this.removeTransform(i)), e4((e = i).x), e4(e.y), {
                                animationId: this.root.animationId,
                                measuredBox: r,
                                layoutBox: i,
                                latestValues: {},
                                source: this.id
                            }
                        }
                        measurePageBox() {
                            let {
                                visualElement: t
                            } = this.options;
                            if (!t) return (0, tS.ge)();
                            let e = t.measureViewportBox();
                            if (!(this.scroll?.wasRoot || this.path.some(e9))) {
                                let {
                                    scroll: t
                                } = this.root;
                                t && ((0, ew.Ql)(e.x, t.offset.x), (0, ew.Ql)(e.y, t.offset.y))
                            }
                            return e
                        }
                        removeElementScroll(t) {
                            let e = (0, tS.ge)();
                            if (eb(e, t), this.scroll?.wasRoot) return e;
                            for (let r = 0; r < this.path.length; r++) {
                                let i = this.path[r],
                                    {
                                        scroll: n,
                                        options: s
                                    } = i;
                                i !== this.root && n && s.layoutScroll && (n.wasRoot && eb(e, t), (0, ew.Ql)(e.x, n.offset.x), (0, ew.Ql)(e.y, n.offset.y))
                            }
                            return e
                        }
                        applyTransform(t, e = !1) {
                            let r = (0, tS.ge)();
                            eb(r, t);
                            for (let t = 0; t < this.path.length; t++) {
                                let i = this.path[t];
                                !e && i.options.layoutScroll && i.scroll && i !== i.root && (0, ew.Ww)(r, {
                                    x: -i.scroll.offset.x,
                                    y: -i.scroll.offset.y
                                }), (0, eL.HD)(i.latestValues) && (0, ew.Ww)(r, i.latestValues)
                            }
                            return (0, eL.HD)(this.latestValues) && (0, ew.Ww)(r, this.latestValues), r
                        }
                        removeTransform(t) {
                            let e = (0, tS.ge)();
                            eb(e, t);
                            for (let t = 0; t < this.path.length; t++) {
                                let r = this.path[t];
                                if (!r.instance || !(0, eL.HD)(r.latestValues)) continue;
                                (0, eL.vk)(r.latestValues) && r.updateSnapshot();
                                let i = (0, tS.ge)();
                                eb(i, r.measurePageBox()), eA(e, r.latestValues, r.snapshot ? r.snapshot.layoutBox : void 0, i)
                            }
                            return (0, eL.HD)(this.latestValues) && eA(e, this.latestValues), e
                        }
                        setTargetDelta(t) {
                            this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                        }
                        setOptions(t) {
                            this.options = {
                                ...this.options,
                                ...t,
                                crossfade: void 0 === t.crossfade || t.crossfade
                            }
                        }
                        clearMeasurements() {
                            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                        }
                        forceRelativeParentToResolveTarget() {
                            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tl.uv.timestamp && this.relativeParent.resolveTargetDelta(!0)
                        }
                        resolveTargetDelta(t = !1) {
                            let e = this.getLead();
                            this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
                            let r = !!this.resumingFrom || this !== e;
                            if (!(t || r && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                            let {
                                layout: i,
                                layoutId: n
                            } = this.options;
                            if (this.layout && (i || n)) {
                                if (this.resolvedRelativeTargetAt = tl.uv.timestamp, !this.targetDelta && !this.relativeTarget) {
                                    let t = this.getClosestProjectingParent();
                                    t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, tS.ge)(), this.relativeTargetOrigin = (0, tS.ge)(), tP(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), eb(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                if (this.relativeTarget || this.targetDelta) {
                                    if (this.target || (this.target = (0, tS.ge)(), this.targetWithTransforms = (0, tS.ge)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
                                        var s, o, a;
                                        this.forceRelativeParentToResolveTarget(), s = this.target, o = this.relativeTarget, a = this.relativeParent.target, tw(s.x, o.x, a.x), tw(s.y, o.y, a.y)
                                    } else this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : eb(this.target, this.layout.layoutBox), (0, ew.o4)(this.target, this.targetDelta)) : eb(this.target, this.layout.layoutBox);
                                    if (this.attemptToResolveRelativeTarget) {
                                        this.attemptToResolveRelativeTarget = !1;
                                        let t = this.getClosestProjectingParent();
                                        t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, tS.ge)(), this.relativeTargetOrigin = (0, tS.ge)(), tP(this.relativeTargetOrigin, this.target, t.target), eb(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                    }
                                    t4.Q.value && eF.calculatedTargetDeltas++
                                }
                            }
                        }
                        getClosestProjectingParent() {
                            if (!(!this.parent || (0, eL.vk)(this.parent.latestValues) || (0, eL.vF)(this.parent.latestValues)))
                                if (this.parent.isProjecting()) return this.parent;
                                else return this.parent.getClosestProjectingParent()
                        }
                        isProjecting() {
                            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                        }
                        calcProjection() {
                            let t = this.getLead(),
                                e = !!this.resumingFrom || this !== t,
                                r = !0;
                            if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (r = !1), e && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1), this.resolvedRelativeTargetAt === tl.uv.timestamp && (r = !1), r) return;
                            let {
                                layout: i,
                                layoutId: n
                            } = this.options;
                            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(i || n)) return;
                            eb(this.layoutCorrected, this.layout.layoutBox);
                            let s = this.treeScale.x,
                                o = this.treeScale.y;
                            (0, ew.OU)(this.layoutCorrected, this.treeScale, this.path, e), t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox, t.targetWithTransforms = (0, tS.ge)());
                            let {
                                target: a
                            } = t;
                            if (!a) {
                                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                                return
                            }
                            this.projectionDelta && this.prevProjectionDelta ? (ex(this.prevProjectionDelta.x, this.projectionDelta.x), ex(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), tx(this.projectionDelta, this.layoutCorrected, a, this.latestValues), this.treeScale.x === s && this.treeScale.y === o && eD(this.projectionDelta.x, this.prevProjectionDelta.x) && eD(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", a)), t4.Q.value && eF.calculatedProjections++
                        }
                        hide() {
                            this.isVisible = !1
                        }
                        show() {
                            this.isVisible = !0
                        }
                        scheduleRender(t = !0) {
                            if (this.options.visualElement?.scheduleRender(), t) {
                                let t = this.getStack();
                                t && t.scheduleRender()
                            }
                            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                        }
                        createProjectionDeltas() {
                            this.prevProjectionDelta = (0, tS.xU)(), this.projectionDelta = (0, tS.xU)(), this.projectionDeltaWithTransform = (0, tS.xU)()
                        }
                        setAnimationOrigin(t, e = !1) {
                            let r, i = this.snapshot,
                                n = i ? i.latestValues : {},
                                s = {
                                    ...this.latestValues
                                },
                                o = (0, tS.xU)();
                            this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                            let a = (0, tS.ge)(),
                                l = (i ? i.source : void 0) !== (this.layout ? this.layout.source : void 0),
                                u = this.getStack(),
                                d = !u || u.members.length <= 1,
                                h = !!(l && !d && !0 === this.options.crossfade && !this.path.some(e2));
                            this.animationProgress = 0, this.mixTargetDelta = e => {
                                let i = e / 1e3;
                                if (e0(o.x, t.x, i), e0(o.y, t.y, i), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                    var u, c, p, m, f, g;
                                    tP(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, m = this.relativeTargetOrigin, f = a, g = i, e1(p.x, m.x, f.x, g), e1(p.y, m.y, f.y, g), r && (u = this.relativeTarget, c = r, eC(u.x, c.x) && eC(u.y, c.y)) && (this.isProjectionDirty = !1), r || (r = (0, tS.ge)()), eb(r, this.relativeTarget)
                                }
                                l && (this.animationValues = s, function (t, e, r, i, n, s) {
                                    n ? (t.opacity = (0, tu.k)(0, r.opacity ?? 1, ef(i)), t.opacityExit = (0, tu.k)(e.opacity ?? 1, 0, eg(i))) : s && (t.opacity = (0, tu.k)(e.opacity ?? 1, r.opacity ?? 1, i)); for (let n = 0; n < eh; n++) {
                                        let s = `border${ed[n]}Radius`,
                                            o = em(e, s),
                                            a = em(r, s);
                                        (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || ep(o) === ep(a) ? (t[s] = Math.max((0, tu.k)(ec(o), ec(a), i), 0), (ta.KN.test(a) || ta.KN.test(o)) && (t[s] += "%")) : t[s] = a)
                                    } (e.rotate || r.rotate) && (t.rotate = (0, tu.k)(e.rotate || 0, r.rotate || 0, i))
                                }(s, n, this.latestValues, i, h, d)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = i
                            }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
                        }
                        startAnimation(t) {
                            this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && ((0, tl.WG)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = tl.Gt.update(() => {
                                tQ.hasAnimatedSinceResize = !0, ee.q.layout++, this.motionValue || (this.motionValue = (0, er.OQ)(0)), this.currentAnimation = (0, en.z)(this.motionValue, [0, 1e3], {
                                    ...t,
                                    velocity: 0,
                                    isSync: !0,
                                    onUpdate: e => {
                                        this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                    },
                                    onStop: () => {
                                        ee.q.layout--
                                    },
                                    onComplete: () => {
                                        ee.q.layout--, t.onComplete && t.onComplete(), this.completeAnimation()
                                    }
                                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                            })
                        }
                        completeAnimation() {
                            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                            let t = this.getStack();
                            t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                        }
                        finishAnimation() {
                            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                        }
                        applyTransformsToTarget() {
                            let t = this.getLead(),
                                {
                                    targetWithTransforms: e,
                                    target: r,
                                    layout: i,
                                    latestValues: n
                                } = t;
                            if (e && r && i) {
                                if (this !== t && this.layout && i && e6(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                                    r = this.target || (0, tS.ge)();
                                    let e = ty(this.layout.layoutBox.x);
                                    r.x.min = t.target.x.min, r.x.max = r.x.min + e;
                                    let i = ty(this.layout.layoutBox.y);
                                    r.y.min = t.target.y.min, r.y.max = r.y.min + i
                                }
                                eb(e, r), (0, ew.Ww)(e, n), tx(this.projectionDeltaWithTransform, this.layoutCorrected, e, n)
                            }
                        }
                        registerSharedNode(t, e) {
                            this.sharedNodes.has(t) || this.sharedNodes.set(t, new eR), this.sharedNodes.get(t).add(e);
                            let r = e.options.initialPromotionConfig;
                            e.promote({
                                transition: r ? r.transition : void 0,
                                preserveFollowOpacity: r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(e) : void 0
                            })
                        }
                        isLead() {
                            let t = this.getStack();
                            return !t || t.lead === this
                        }
                        getLead() {
                            let {
                                layoutId: t
                            } = this.options;
                            return t && this.getStack()?.lead || this
                        }
                        getPrevLead() {
                            let {
                                layoutId: t
                            } = this.options;
                            return t ? this.getStack()?.prevLead : void 0
                        }
                        getStack() {
                            let {
                                layoutId: t
                            } = this.options;
                            if (t) return this.root.sharedNodes.get(t)
                        }
                        promote({
                            needsReset: t,
                            transition: e,
                            preserveFollowOpacity: r
                        } = {}) {
                            let i = this.getStack();
                            i && i.promote(this, r), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                                transition: e
                            })
                        }
                        relegate() {
                            let t = this.getStack();
                            return !!t && t.relegate(this)
                        }
                        resetSkewAndRotation() {
                            let {
                                visualElement: t
                            } = this.options;
                            if (!t) return;
                            let e = !1,
                                {
                                    latestValues: r
                                } = t;
                            if ((r.z || r.rotate || r.rotateX || r.rotateY || r.rotateZ || r.skewX || r.skewY) && (e = !0), !e) return;
                            let i = {};
                            r.z && e_("z", t, i, this.animationValues);
                            for (let e = 0; e < eI.length; e++) e_(`rotate${eI[e]}`, t, i, this.animationValues), e_(`skew${eI[e]}`, t, i, this.animationValues);
                            for (let e in t.render(), i) t.setStaticValue(e, i[e]), this.animationValues && (this.animationValues[e] = i[e]);
                            t.scheduleRender()
                        }
                        applyProjectionStyles(t, e) {
                            if (!this.instance || this.isSVG) return;
                            if (!this.isVisible) {
                                t.visibility = "hidden";
                                return
                            }
                            let r = this.getTransformTemplate();
                            if (this.needsReset) {
                                this.needsReset = !1, t.visibility = "", t.opacity = "", t.pointerEvents = V(e?.pointerEvents) || "", t.transform = r ? r(this.latestValues, "") : "none"; return
                            }
                            let i = this.getLead();
                            if (!this.projectionDelta || !this.layout || !i.target) {
                                this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = V(e?.pointerEvents) || ""), this.hasProjected && !(0, eL.HD)(this.latestValues) && (t.transform = r ? r({}, "") : "none", this.hasProjected = !1); return
                            }
                            t.visibility = "";
                            let n = i.animationValues || i.latestValues;
                            this.applyTransformsToTarget();
                            let s = function (t, e, r) {
                                let i = "",
                                    n = t.x.translate / e.x,
                                    s = t.y.translate / e.y,
                                    o = r?.z || 0;
                                if ((n || s || o) && (i = `translate3d(${n}px, ${s}px, ${o}px) `), (1 !== e.x || 1 !== e.y) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), r) {
                                    let {
                                        transformPerspective: t,
                                        rotate: e,
                                        rotateX: n,
                                        rotateY: s,
                                        skewX: o,
                                        skewY: a
                                    } = r;
                                    t && (i = `perspective(${t}px) ${i}`), e && (i += `rotate(${e}deg) `), n && (i += `rotateX(${n}deg) `), s && (i += `rotateY(${s}deg) `), o && (i += `skewX(${o}deg) `), a && (i += `skewY(${a}deg) `)
                                }
                                let a = t.x.scale * e.x,
                                    l = t.y.scale * e.y;
                                return (1 !== a || 1 !== l) && (i += `scale(${a}, ${l})`), i || "none"
                            }(this.projectionDeltaWithTransform, this.treeScale, n);
                            r && (s = r(n, s)), t.transform = s;
                            let {
                                x: o,
                                y: a
                            } = this.projectionDelta;
                            for (let e in t.transformOrigin = `${100 * o.origin}% ${100 * a.origin}% 0`, i.animationValues ? t.opacity = i === this ? n.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : n.opacityExit : t.opacity = i === this ? void 0 !== n.opacity ? n.opacity : "" : void 0 !== n.opacityExit ? n.opacityExit : 0, t1.H) {
                                if (void 0 === n[e]) continue;
                                let {
                                    correct: r,
                                    applyTo: o,
                                    isCSSVariable: a
                                } = t1.H[e], l = "none" === s ? n[e] : r(n[e], i);
                                if (o) {
                                    let e = o.length;
                                    for (let r = 0; r < e; r++) t[o[r]] = l
                                } else a ? this.options.visualElement.renderState.vars[e] = l : t[e] = l
                            }
                            this.options.layoutId && (t.pointerEvents = i === this ? V(e?.pointerEvents) || "" : "none")
                        }
                        clearSnapshot() {
                            this.resumeFrom = this.snapshot = void 0
                        }
                        resetTree() {
                            this.root.nodes.forEach(t => t.currentAnimation?.stop()), this.root.nodes.forEach(eq), this.root.sharedNodes.clear()
                        }
                    }
                }

                function eN(t) {
                    t.updateLayout()
                }

                function eU(t) {
                    let e = t.resumeFrom?.snapshot || t.snapshot;
                    if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
                        let {
                            layoutBox: r,
                            measuredBox: i
                        } = t.layout, {
                            animationType: n
                        } = t.options, s = e.source !== t.layout.source;
                        "size" === n ? tT(t => {
                            let i = s ? e.measuredBox[t] : e.layoutBox[t],
                                n = ty(i);
                            i.min = r[t].min, i.max = i.min + n
                        }) : e6(n, e.layoutBox, r) && tT(i => {
                            let n = s ? e.measuredBox[i] : e.layoutBox[i],
                                o = ty(r[i]);
                            n.max = n.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[i].max = t.relativeTarget[i].min + o)
                        });
                        let o = (0, tS.xU)();
                        tx(o, r, e.layoutBox);
                        let a = (0, tS.xU)();
                        s ? tx(a, t.applyTransform(i, !0), e.measuredBox) : tx(a, r, e.layoutBox);
                        let l = !eM(o),
                            u = !1;
                        if (!t.resumeFrom) {
                            let i = t.getClosestProjectingParent();
                            if (i && !i.resumeFrom) {
                                let {
                                    snapshot: n,
                                    layout: s
                                } = i;
                                if (n && s) {
                                    let o = (0, tS.ge)();
                                    tP(o, e.layoutBox, n.layoutBox);
                                    let a = (0, tS.ge)();
                                    tP(a, r, s.layoutBox), eV(o, a) || (u = !0), i.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = i)
                                }
                            }
                        }
                        t.notifyListeners("didUpdate", {
                            layout: r,
                            snapshot: e,
                            delta: a,
                            layoutDelta: o,
                            hasLayoutChanged: l,
                            hasRelativeLayoutChanged: u
                        })
                    } else if (t.isLead()) {
                        let {
                            onExitComplete: e
                        } = t.options;
                        e && e()
                    }
                    t.options.transition = void 0
                }

                function eW(t) {
                    t4.Q.value && eF.nodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
                }

                function e$(t) {
                    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
                }

                function eG(t) {
                    t.clearSnapshot()
                }

                function eq(t) {
                    t.clearMeasurements()
                }

                function eK(t) {
                    t.isLayoutDirty = !1
                }

                function eX(t) {
                    let {
                        visualElement: e
                    } = t.options;
                    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
                }

                function eH(t) {
                    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
                }

                function eY(t) {
                    t.resolveTargetDelta()
                }

                function eQ(t) {
                    t.calcProjection()
                }

                function eZ(t) {
                    t.resetSkewAndRotation()
                }

                function eJ(t) {
                    t.removeLeadSnapshot()
                }

                function e0(t, e, r) {
                    t.translate = (0, tu.k)(e.translate, 0, r), t.scale = (0, tu.k)(e.scale, 1, r), t.origin = e.origin, t.originPoint = e.originPoint
                }

                function e1(t, e, r, i) {
                    t.min = (0, tu.k)(e.min, r.min, i), t.max = (0, tu.k)(e.max, r.max, i)
                }

                function e2(t) {
                    return t.animationValues && void 0 !== t.animationValues.opacityExit
                }
                let e5 = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                    e3 = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
                    e8 = e3("applewebkit/") && !e3("chrome/") ? Math.round : ts.l;

                function e4(t) {
                    t.min = e8(t.min), t.max = e8(t.max)
                }

                function e6(t, e, r) {
                    return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(eO(e) - eO(r)))
                }

                function e9(t) {
                    return t !== t.root && t.scroll?.wasRoot
                }
                let e7 = ez({
                    attachResizeListener: (t, e) => tc(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                    rt = {
                        current: void 0
                    },
                    re = ez({
                        measureScroll: t => ({
                            x: t.scrollLeft,
                            y: t.scrollTop
                        }),
                        defaultParent: () => {
                            if (!rt.current) {
                                let t = new e7({});
                                t.mount(window), t.setOptions({
                                    layoutScroll: !0
                                }), rt.current = t
                            }
                            return rt.current
                        },
                        resetTransform: (t, e) => {
                            t.style.transform = void 0 !== e ? e : "none"
                        },
                        checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                    });
                var rr = r(2198);

                function ri(t, e) {
                    let r = (0, rr.K)(t),
                        i = new AbortController;
                    return [r, {
                        passive: !0,
                        ...e,
                        signal: i.signal
                    }, () => i.abort()]
                }

                function rn(t) {
                    return !("touch" === t.pointerType || to.x || to.y)
                }

                function rs(t, e, r) {
                    let {
                        props: i
                    } = t;
                    t.animationState && i.whileHover && t.animationState.setActive("whileHover", "Start" === r);
                    let n = i["onHover" + r];
                    n && tl.Gt.postRender(() => n(e, tm(e)))
                }
                class ro extends te {
                    mount() {
                        let {
                            current: t
                        } = this.node;
                        t && (this.unmount = function (t, e, r = {}) {
                            let [i, n, s] = ri(t, r), o = t => {
                                if (!rn(t)) return;
                                let {
                                    target: r
                                } = t, i = e(r, t);
                                if ("function" != typeof i || !r) return;
                                let s = t => {
                                    rn(t) && (i(t), r.removeEventListener("pointerleave", s))
                                };
                                r.addEventListener("pointerleave", s, n)
                            };
                            return i.forEach(t => {
                                t.addEventListener("pointerenter", o, n)
                            }), s
                        }(t, (t, e) => (rs(this.node, e, "Start"), t => rs(this.node, t, "End"))))
                    }
                    unmount() { }
                }
                class ra extends te {
                    constructor() {
                        super(...arguments), this.isActive = !1
                    }
                    onFocus() {
                        let t = !1;
                        try {
                            t = this.node.current.matches(":focus-visible")
                        } catch (e) {
                            t = !0
                        }
                        t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                    }
                    onBlur() {
                        this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                    }
                    mount() {
                        this.unmount = (0, tC.F)(tc(this.node.current, "focus", () => this.onFocus()), tc(this.node.current, "blur", () => this.onBlur()))
                    }
                    unmount() { }
                }
                var rl = r(7351);
                let ru = (t, e) => !!e && (t === e || ru(t, e.parentElement)),
                    rd = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
                    rh = new WeakSet;

                function rc(t) {
                    return e => {
                        "Enter" === e.key && t(e)
                    }
                }

                function rp(t, e) {
                    t.dispatchEvent(new PointerEvent("pointer" + e, {
                        isPrimary: !0,
                        bubbles: !0
                    }))
                }
                let rm = (t, e) => {
                    let r = t.currentTarget;
                    if (!r) return;
                    let i = rc(() => {
                        if (rh.has(r)) return;
                        rp(r, "down");
                        let t = rc(() => {
                            rp(r, "up")
                        });
                        r.addEventListener("keyup", t, e), r.addEventListener("blur", () => rp(r, "cancel"), e)
                    });
                    r.addEventListener("keydown", i, e), r.addEventListener("blur", () => r.removeEventListener("keydown", i), e)
                };

                function rf(t) {
                    return tp(t) && !(to.x || to.y)
                }

                function rg(t, e, r) {
                    let {
                        props: i
                    } = t;
                    if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
                    t.animationState && i.whileTap && t.animationState.setActive("whileTap", "Start" === r);
                    let n = i["onTap" + ("End" === r ? "" : r)];
                    n && tl.Gt.postRender(() => n(e, tm(e)))
                }
                class rv extends te {
                    mount() {
                        let {
                            current: t
                        } = this.node;
                        t && (this.unmount = function (t, e, r = {}) {
                            let [i, n, s] = ri(t, r), o = t => {
                                let i = t.currentTarget;
                                if (!rf(t)) return;
                                rh.add(i);
                                let s = e(i, t),
                                    o = (t, e) => {
                                        window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", l), rh.has(i) && rh.delete(i), rf(t) && "function" == typeof s && s(t, {
                                            success: e
                                        })
                                    },
                                    a = t => {
                                        o(t, i === window || i === document || r.useGlobalTarget || ru(i, t.target))
                                    },
                                    l = t => {
                                        o(t, !1)
                                    };
                                window.addEventListener("pointerup", a, n), window.addEventListener("pointercancel", l, n)
                            };
                            return i.forEach(t => {
                                ((r.useGlobalTarget ? window : t).addEventListener("pointerdown", o, n), (0, rl.s)(t)) && (t.addEventListener("focus", t => rm(t, n)), rd.has(t.tagName) || -1 !== t.tabIndex || t.hasAttribute("tabindex") || (t.tabIndex = 0))
                            }), s
                        }(t, (t, e) => (rg(this.node, e, "Start"), (t, {
                            success: e
                        }) => rg(this.node, t, e ? "End" : "Cancel")), {
                            useGlobalTarget: this.node.props.globalTapTarget
                        }))
                    }
                    unmount() { }
                }
                let ry = new WeakMap,
                    rb = new WeakMap,
                    rx = t => {
                        let e = ry.get(t.target);
                        e && e(t)
                    },
                    rw = t => {
                        t.forEach(rx)
                    },
                    rk = {
                        some: 0,
                        all: 1
                    };
                class rP extends te {
                    constructor() {
                        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                    }
                    startObserver() {
                        this.unmount();
                        let {
                            viewport: t = {}
                        } = this.node.getProps(), {
                            root: e,
                            margin: r,
                            amount: i = "some",
                            once: n
                        } = t, s = {
                            root: e ? e.current : void 0,
                            rootMargin: r,
                            threshold: "number" == typeof i ? i : rk[i]
                        };
                        return function (t, e, r) {
                            let i = function ({
                                root: t,
                                ...e
                            }) {
                                let r = t || document;
                                rb.has(r) || rb.set(r, {});
                                let i = rb.get(r),
                                    n = JSON.stringify(e);
                                return i[n] || (i[n] = new IntersectionObserver(rw, {
                                    root: t,
                                    ...e
                                })), i[n]
                            }(e);
                            return ry.set(t, r), i.observe(t), () => {
                                ry.delete(t), i.unobserve(t)
                            }
                        }(this.node.current, s, t => {
                            let {
                                isIntersecting: e
                            } = t;
                            if (this.isInView === e || (this.isInView = e, n && !e && this.hasEnteredView)) return;
                            e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                            let {
                                onViewportEnter: r,
                                onViewportLeave: i
                            } = this.node.getProps(), s = e ? r : i;
                            s && s(t)
                        })
                    }
                    mount() {
                        this.startObserver()
                    }
                    update() {
                        if ("undefined" == typeof IntersectionObserver) return;
                        let {
                            props: t,
                            prevProps: e
                        } = this.node;
                        ["amount", "margin", "root"].some(function ({
                            viewport: t = {}
                        }, {
                            viewport: e = {}
                        } = {}) {
                            return r => t[r] !== e[r]
                        }(t, e)) && this.startObserver()
                    }
                    unmount() { }
                }
                let rS = function (t, e) {
                    if ("undefined" == typeof Proxy) return U;
                    let r = new Map,
                        i = (r, i) => U(r, i, t, e);
                    return new Proxy((t, e) => i(t, e), {
                        get: (n, s) => "create" === s ? i : (r.has(s) || r.set(s, U(s, void 0, t, e)), r.get(s))
                    })
                }({
                    animation: {
                        Feature: tr
                    },
                    exit: {
                        Feature: tn
                    },
                    inView: {
                        Feature: rP
                    },
                    tap: {
                        Feature: rv
                    },
                    focus: {
                        Feature: ra
                    },
                    hover: {
                        Feature: ro
                    },
                    pan: {
                        Feature: tX
                    },
                    drag: {
                        Feature: tq,
                        ProjectionNode: re,
                        MeasureLayout: t3
                    },
                    layout: {
                        ProjectionNode: re,
                        MeasureLayout: t3
                    }
                }, (t, e) => a(t) ? new s.l(e) : new n.M(e, {
                    allowProjection: t !== i.Fragment
                }))
            }
        },
        8437: (t, e, r) => {
            r.d(e, {
                I: () => o
            });
            var i = r(3387);
            let n = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
            var s = r(4744);

            function o(t, e) {
                let r = !1,
                    o = !0,
                    a = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    l = () => r = !0,
                    u = n.reduce((t, r) => (t[r] = function (t, e) {
                        let r = new Set,
                            i = new Set,
                            n = !1,
                            o = !1,
                            a = new WeakSet,
                            l = {
                                delta: 0,
                                timestamp: 0,
                                isProcessing: !1
                            },
                            u = 0;

                        function d(e) {
                            a.has(e) && (h.schedule(e), t()), u++, e(l)
                        }
                        let h = {
                            schedule: (t, e = !1, s = !1) => {
                                let o = s && n ? r : i;
                                return e && a.add(t), o.has(t) || o.add(t), t
                            },
                            cancel: t => {
                                i.delete(t), a.delete(t)
                            },
                            process: t => {
                                if (l = t, n) {
                                    o = !0;
                                    return
                                }
                                n = !0, [r, i] = [i, r], r.forEach(d), e && s.Q.value && s.Q.value.frameloop[e].push(u), u = 0, r.clear(), n = !1, o && (o = !1, h.process(t))
                            }
                        };
                        return h
                    }(l, e ? r : void 0), t), {}),
                    {
                        setup: d,
                        read: h,
                        resolveKeyframes: c,
                        preUpdate: p,
                        update: m,
                        preRender: f,
                        render: g,
                        postRender: v
                    } = u,
                    y = () => {
                        let n = i.W.useManualTiming ? a.timestamp : performance.now();
                        r = !1, i.W.useManualTiming || (a.delta = o ? 1e3 / 60 : Math.max(Math.min(n - a.timestamp, 40), 1)), a.timestamp = n, a.isProcessing = !0, d.process(a), h.process(a), c.process(a), p.process(a), m.process(a), f.process(a), g.process(a), v.process(a), a.isProcessing = !1, r && e && (o = !1, t(y))
                    },
                    b = () => {
                        r = !0, o = !0, a.isProcessing || t(y)
                    };
                return {
                    schedule: n.reduce((t, e) => {
                        let i = u[e];
                        return t[e] = (t, e = !1, n = !1) => (r || b(), i.schedule(t, e, n)), t
                    }, {}),
                    cancel: t => {
                        for (let e = 0; e < n.length; e++) u[n[e]].cancel(t)
                    },
                    state: a,
                    steps: u
                }
            }
        },
        8450: (t, e, r) => {
            r.d(e, {
                I: () => i
            });
            let i = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
        },
        8476: (t, e, r) => {
            r.d(e, {
                V: () => a
            });
            var i = r(7887),
                n = r(4158),
                s = r(1557),
                o = r(5920);
            let a = {
                test: (0, o.$)("hsl", "hue"),
                parse: (0, o.q)("hue", "saturation", "lightness"),
                transform: ({
                    hue: t,
                    saturation: e,
                    lightness: r,
                    alpha: o = 1
                }) => "hsla(" + Math.round(t) + ", " + n.KN.transform((0, s.a)(e)) + ", " + n.KN.transform((0, s.a)(r)) + ", " + (0, s.a)(i.X4.transform(o)) + ")"
            }
        },
        8588: (t, e, r) => {
            function i({
                top: t,
                left: e,
                right: r,
                bottom: i
            }) {
                return {
                    x: {
                        min: e,
                        max: r
                    },
                    y: {
                        min: t,
                        max: i
                    }
                }
            }

            function n({
                x: t,
                y: e
            }) {
                return {
                    top: e.min,
                    right: t.max,
                    bottom: e.max,
                    left: t.min
                }
            }

            function s(t, e) {
                if (!e) return t;
                let r = e({
                    x: t.left,
                    y: t.top
                }),
                    i = e({
                        x: t.right,
                        y: t.bottom
                    });
                return {
                    top: r.y,
                    left: r.x,
                    bottom: i.y,
                    right: i.x
                }
            }
            r.d(e, {
                FY: () => i,
                bS: () => s,
                pA: () => n
            })
        },
        8589: (t, e, r) => {
            r.d(e, {
                D: () => i
            });
            let i = t => Array.isArray(t) && "number" == typeof t[0]
        },
        8606: (t, e, r) => {
            r.d(e, {
                j: () => n,
                p: () => o
            });
            let i = t => e => "string" == typeof e && e.startsWith(t),
                n = i("--"),
                s = i("var(--"),
                o = t => !!s(t) && a.test(t.split("/*")[0].trim()),
                a = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
        },
        8609: (t, e, r) => {
            r.d(e, {
                x: () => s
            });
            var i = r(4803),
                n = r(3055);

            function s(t, e, r) {
                let {
                    style: s
                } = t, o = {};
                for (let a in s) ((0, i.S)(s[a]) || e.style && (0, i.S)(e.style[a]) || (0, n.z)(a, t) || r?.getValue(a)?.liveStyle !== void 0) && (o[a] = s[a]);
                return o
            }
        },
        8777: (t, e, r) => {
            r.d(e, {
                r: () => i
            });

            function i(t, e) {
                return t?.[e] ?? t?.default ?? t
            }
        },
        8859: (t, e) => {
            function r(t) {
                let e = {};
                for (let [r, i] of t.entries()) {
                    let t = e[r];
                    void 0 === t ? e[r] = i : Array.isArray(t) ? t.push(i) : e[r] = [t, i]
                }
                return e
            }

            function i(t) {
                return "string" == typeof t ? t : ("number" != typeof t || isNaN(t)) && "boolean" != typeof t ? "" : String(t)
            }

            function n(t) {
                let e = new URLSearchParams;
                for (let [r, n] of Object.entries(t))
                    if (Array.isArray(n))
                        for (let t of n) e.append(r, i(t));
                    else e.set(r, i(n));
                return e
            }

            function s(t) {
                for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) r[i - 1] = arguments[i];
                for (let e of r) {
                    for (let r of e.keys()) t.delete(r);
                    for (let [r, i] of e.entries()) t.append(r, i)
                }
                return t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), ! function (t, e) {
                for (var r in e) Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
            }(e, {
                assign: function () {
                    return s
                },
                searchParamsToUrlQuery: function () {
                    return r
                },
                urlQueryToSearchParams: function () {
                    return n
                }
            })
        },
        8883: (t, e, r) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImgProps", {
                enumerable: !0,
                get: function () {
                    return l
                }
            }), r(3230);
            let i = r(5100),
                n = r(5840),
                s = ["-moz-initial", "fill", "none", "scale-down", void 0];

            function o(t) {
                return void 0 !== t.default
            }

            function a(t) {
                return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
            }

            function l(t, e) {
                var r, l;
                let u, d, h, {
                    src: c,
                    sizes: p,
                    unoptimized: m = !1,
                    priority: f = !1,
                    loading: g,
                    className: v,
                    quality: y,
                    width: b,
                    height: x,
                    fill: w = !1,
                    style: k,
                    overrideSrc: P,
                    onLoad: S,
                    onLoadingComplete: T,
                    placeholder: A = "empty",
                    blurDataURL: E,
                    fetchPriority: M,
                    decoding: C = "async",
                    layout: j,
                    objectFit: V,
                    objectPosition: O,
                    lazyBoundary: D,
                    lazyRoot: R,
                    ...L
                } = t,
                    {
                        imgConf: F,
                        showAltText: I,
                        blurComplete: B,
                        defaultLoader: _
                    } = e,
                    z = F || n.imageConfigDefault;
                if ("allSizes" in z) u = z;
                else {
                    let t = [...z.deviceSizes, ...z.imageSizes].sort((t, e) => t - e),
                        e = z.deviceSizes.sort((t, e) => t - e),
                        i = null == (r = z.qualities) ? void 0 : r.sort((t, e) => t - e);
                    u = {
                        ...z,
                        allSizes: t,
                        deviceSizes: e,
                        qualities: i
                    }
                }
                if (void 0 === _) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                    value: "E163",
                    enumerable: !1,
                    configurable: !0
                });
                let N = L.loader || _;
                delete L.loader, delete L.srcSet;
                let U = "__next_img_default" in N;
                if (U) {
                    if ("custom" === u.loader) throw Object.defineProperty(Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'), "__NEXT_ERROR_CODE", {
                        value: "E252",
                        enumerable: !1,
                        configurable: !0
                    })
                } else {
                    let t = N;
                    N = e => {
                        let {
                            config: r,
                            ...i
                        } = e;
                        return t(i)
                    }
                }
                if (j) {
                    "fill" === j && (w = !0);
                    let t = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[j];
                    t && (k = {
                        ...k,
                        ...t
                    });
                    let e = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[j];
                    e && !p && (p = e)
                }
                let W = "",
                    $ = a(b),
                    G = a(x);
                if ((l = c) && "object" == typeof l && (o(l) || void 0 !== l.src)) {
                    let t = o(c) ? c.default : c;
                    if (!t.src) throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t)), "__NEXT_ERROR_CODE", {
                        value: "E460",
                        enumerable: !1,
                        configurable: !0
                    });
                    if (!t.height || !t.width) throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t)), "__NEXT_ERROR_CODE", {
                        value: "E48",
                        enumerable: !1,
                        configurable: !0
                    });
                    if (d = t.blurWidth, h = t.blurHeight, E = E || t.blurDataURL, W = t.src, !w)
                        if ($ || G) {
                            if ($ && !G) {
                                let e = $ / t.width;
                                G = Math.round(t.height * e)
                            } else if (!$ && G) {
                                let e = G / t.height;
                                $ = Math.round(t.width * e)
                            }
                        } else $ = t.width, G = t.height
                }
                let q = !f && ("lazy" === g || void 0 === g);
                (!(c = "string" == typeof c ? c : W) || c.startsWith("data:") || c.startsWith("blob:")) && (m = !0, q = !1), u.unoptimized && (m = !0), U && !u.dangerouslyAllowSVG && c.split("?", 1)[0].endsWith(".webp") && (m = !0);
                let K = a(y),
                    X = Object.assign(w ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: V,
                        objectPosition: O
                    } : {}, I ? {} : {
                        color: "transparent"
                    }, k),
                    H = B || "empty" === A ? null : "blur" === A ? 'url("data:image/svg+xml;charset=utf-8,' + (0, i.getImageBlurSvg)({
                        widthInt: $,
                        heightInt: G,
                        blurWidth: d,
                        blurHeight: h,
                        blurDataURL: E || "",
                        objectFit: X.objectFit
                    }) + '")' : 'url("' + A + '")',
                    Y = s.includes(X.objectFit) ? "fill" === X.objectFit ? "100% 100%" : "cover" : X.objectFit,
                    Q = H ? {
                        backgroundSize: Y,
                        backgroundPosition: X.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: H
                    } : {},
                    Z = function (t) {
                        let {
                            config: e,
                            src: r,
                            unoptimized: i,
                            width: n,
                            quality: s,
                            sizes: o,
                            loader: a
                        } = t;
                        if (i) return {
                            src: r,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: l,
                            kind: u
                        } = function (t, e, r) {
                            let {
                                deviceSizes: i,
                                allSizes: n
                            } = t;
                            if (r) {
                                let t = /(^|\s)(1?\d?\d)vw/g,
                                    e = [];
                                for (let i; i = t.exec(r);) e.push(parseInt(i[2]));
                                if (e.length) {
                                    let t = .01 * Math.min(...e);
                                    return {
                                        widths: n.filter(e => e >= i[0] * t),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: n,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof e ? {
                                widths: i,
                                kind: "w"
                            } : {
                                widths: [...new Set([e, 2 * e].map(t => n.find(e => e >= t) || n[n.length - 1]))],
                                kind: "x"
                            }
                        }(e, n, o), d = l.length - 1;
                        return {
                            sizes: o || "w" !== u ? o : "100vw",
                            srcSet: l.map((t, i) => a({
                                config: e,
                                src: r,
                                quality: s,
                                width: t
                            }) + " " + ("w" === u ? t : i + 1) + u).join(", "),
                            src: a({
                                config: e,
                                src: r,
                                quality: s,
                                width: l[d]
                            })
                        }
                    }({
                        config: u,
                        src: c,
                        unoptimized: m,
                        width: $,
                        quality: K,
                        sizes: p,
                        loader: N
                    });
                return {
                    props: {
                        ...L,
                        loading: q ? "lazy" : g,
                        fetchPriority: M,
                        width: $,
                        height: G,
                        decoding: C,
                        className: v,
                        style: {
                            ...X,
                            ...Q
                        },
                        sizes: Z.sizes,
                        srcSet: Z.srcSet,
                        src: P || Z.src
                    },
                    meta: {
                        unoptimized: m,
                        priority: f,
                        placeholder: A,
                        fill: w
                    }
                }
            }
        },
        8972: (t, e, r) => {
            r.d(e, {
                B: () => i
            });
            let i = "undefined" != typeof window
        },
        9064: (t, e, r) => {
            r.d(e, {
                B: () => u
            });
            var i = r(1297),
                n = r(7887),
                s = r(1557),
                o = r(5920);
            let a = t => (0, i.q)(0, 255, t),
                l = {
                    ...n.ai,
                    transform: t => Math.round(a(t))
                },
                u = {
                    test: (0, o.$)("rgb", "red"),
                    parse: (0, o.q)("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: r,
                        alpha: i = 1
                    }) => "rgba(" + l.transform(t) + ", " + l.transform(e) + ", " + l.transform(r) + ", " + (0, s.a)(n.X4.transform(i)) + ")"
                }
        },
        9115: (t, e, r) => {
            r.d(e, {
                Z: () => n
            });
            var i = r(2017);

            function n(t) {
                let e = [0];
                return (0, i.f)(e, t.length - 1), e
            }
        },
        9253: (t, e, r) => {
            r.d(e, {
                O: () => a,
                e: () => o
            });
            var i = r(6340),
                n = r(5305),
                s = r(8312);

            function o(t) {
                return (0, i.N)(t.animate) || s._.some(e => (0, n.w)(t[e]))
            }

            function a(t) {
                return !!(o(t) || t.variants)
            }
        },
        9515: (t, e, r) => {
            r.d(e, {
                Gt: () => n,
                PP: () => a,
                WG: () => s,
                uv: () => o
            });
            var i = r(9827);
            let {
                schedule: n,
                cancel: s,
                state: o,
                steps: a
            } = (0, r(8437).I)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : i.l, !0)
        },
        9688: (t, e, r) => {
            r.d(e, {
                QP: () => tu
            });
            let i = t => {
                let e = a(t),
                    {
                        conflictingClassGroups: r,
                        conflictingClassGroupModifiers: i
                    } = t;
                return {
                    getClassGroupId: t => {
                        let r = t.split("-");
                        return "" === r[0] && 1 !== r.length && r.shift(), n(r, e) || o(t)
                    },
                    getConflictingClassGroupIds: (t, e) => {
                        let n = r[t] || [];
                        return e && i[t] ? [...n, ...i[t]] : n
                    }
                }
            },
                n = (t, e) => {
                    if (0 === t.length) return e.classGroupId;
                    let r = t[0],
                        i = e.nextPart.get(r),
                        s = i ? n(t.slice(1), i) : void 0;
                    if (s) return s;
                    if (0 === e.validators.length) return;
                    let o = t.join("-");
                    return e.validators.find(({
                        validator: t
                    }) => t(o))?.classGroupId
                },
                s = /^\[(.+)\]$/,
                o = t => {
                    if (s.test(t)) {
                        let e = s.exec(t)[1],
                            r = e?.substring(0, e.indexOf(":"));
                        if (r) return "arbitrary.." + r
                    }
                },
                a = t => {
                    let {
                        theme: e,
                        classGroups: r
                    } = t, i = {
                        nextPart: new Map,
                        validators: []
                    };
                    for (let t in r) l(r[t], i, t, e);
                    return i
                },
                l = (t, e, r, i) => {
                    t.forEach(t => {
                        if ("string" == typeof t) {
                            ("" === t ? e : u(e, t)).classGroupId = r;
                            return
                        }
                        if ("function" == typeof t) return d(t) ? void l(t(i), e, r, i) : void e.validators.push({
                            validator: t,
                            classGroupId: r
                        });
                        Object.entries(t).forEach(([t, n]) => {
                            l(n, u(e, t), r, i)
                        })
                    })
                },
                u = (t, e) => {
                    let r = t;
                    return e.split("-").forEach(t => {
                        r.nextPart.has(t) || r.nextPart.set(t, {
                            nextPart: new Map,
                            validators: []
                        }), r = r.nextPart.get(t)
                    }), r
                },
                d = t => t.isThemeGetter,
                h = t => {
                    if (t < 1) return {
                        get: () => void 0,
                        set: () => { }
                    };
                    let e = 0,
                        r = new Map,
                        i = new Map,
                        n = (n, s) => {
                            r.set(n, s), ++e > t && (e = 0, i = r, r = new Map)
                        };
                    return {
                        get(t) {
                            let e = r.get(t);
                            return void 0 !== e ? e : void 0 !== (e = i.get(t)) ? (n(t, e), e) : void 0
                        },
                        set(t, e) {
                            r.has(t) ? r.set(t, e) : n(t, e)
                        }
                    }
                },
                c = t => {
                    let {
                        prefix: e,
                        experimentalParseClassName: r
                    } = t, i = t => {
                        let e, r = [],
                            i = 0,
                            n = 0,
                            s = 0;
                        for (let o = 0; o < t.length; o++) {
                            let a = t[o];
                            if (0 === i && 0 === n) {
                                if (":" === a) {
                                    r.push(t.slice(s, o)), s = o + 1;
                                    continue
                                }
                                if ("/" === a) {
                                    e = o;
                                    continue
                                }
                            }
                            "[" === a ? i++ : "]" === a ? i-- : "(" === a ? n++ : ")" === a && n--
                        }
                        let o = 0 === r.length ? t : t.substring(s),
                            a = p(o);
                        return {
                            modifiers: r,
                            hasImportantModifier: a !== o,
                            baseClassName: a,
                            maybePostfixModifierPosition: e && e > s ? e - s : void 0
                        }
                    };
                    if (e) {
                        let t = e + ":",
                            r = i;
                        i = e => e.startsWith(t) ? r(e.substring(t.length)) : {
                            isExternal: !0,
                            modifiers: [],
                            hasImportantModifier: !1,
                            baseClassName: e,
                            maybePostfixModifierPosition: void 0
                        }
                    }
                    if (r) {
                        let t = i;
                        i = e => r({
                            className: e,
                            parseClassName: t
                        })
                    }
                    return i
                },
                p = t => t.endsWith("!") ? t.substring(0, t.length - 1) : t.startsWith("!") ? t.substring(1) : t,
                m = t => {
                    let e = Object.fromEntries(t.orderSensitiveModifiers.map(t => [t, !0]));
                    return t => {
                        if (t.length <= 1) return t;
                        let r = [],
                            i = [];
                        return t.forEach(t => {
                            "[" === t[0] || e[t] ? (r.push(...i.sort(), t), i = []) : i.push(t)
                        }), r.push(...i.sort()), r
                    }
                },
                f = t => ({
                    cache: h(t.cacheSize),
                    parseClassName: c(t),
                    sortModifiers: m(t),
                    ...i(t)
                }),
                g = /\s+/,
                v = (t, e) => {
                    let {
                        parseClassName: r,
                        getClassGroupId: i,
                        getConflictingClassGroupIds: n,
                        sortModifiers: s
                    } = e, o = [], a = t.trim().split(g), l = "";
                    for (let t = a.length - 1; t >= 0; t -= 1) {
                        let e = a[t],
                            {
                                isExternal: u,
                                modifiers: d,
                                hasImportantModifier: h,
                                baseClassName: c,
                                maybePostfixModifierPosition: p
                            } = r(e);
                        if (u) {
                            l = e + (l.length > 0 ? " " + l : l);
                            continue
                        }
                        let m = !!p,
                            f = i(m ? c.substring(0, p) : c);
                        if (!f) {
                            if (!m || !(f = i(c))) {
                                l = e + (l.length > 0 ? " " + l : l);
                                continue
                            }
                            m = !1
                        }
                        let g = s(d).join(":"),
                            v = h ? g + "!" : g,
                            y = v + f;
                        if (o.includes(y)) continue;
                        o.push(y);
                        let b = n(f, m);
                        for (let t = 0; t < b.length; ++t) {
                            let e = b[t];
                            o.push(v + e)
                        }
                        l = e + (l.length > 0 ? " " + l : l)
                    }
                    return l
                };

            function y() {
                let t, e, r = 0,
                    i = "";
                for (; r < arguments.length;)(t = arguments[r++]) && (e = b(t)) && (i && (i += " "), i += e);
                return i
            }
            let b = t => {
                let e;
                if ("string" == typeof t) return t;
                let r = "";
                for (let i = 0; i < t.length; i++) t[i] && (e = b(t[i])) && (r && (r += " "), r += e);
                return r
            },
                x = t => {
                    let e = e => e[t] || [];
                    return e.isThemeGetter = !0, e
                },
                w = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
                k = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
                P = /^\d+\/\d+$/,
                S = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                T = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                A = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
                E = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                M = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
                C = t => P.test(t),
                j = t => !!t && !Number.isNaN(Number(t)),
                V = t => !!t && Number.isInteger(Number(t)),
                O = t => t.endsWith("%") && j(t.slice(0, -1)),
                D = t => S.test(t),
                R = () => !0,
                L = t => T.test(t) && !A.test(t),
                F = () => !1,
                I = t => E.test(t),
                B = t => M.test(t),
                _ = t => !N(t) && !K(t),
                z = t => tt(t, tn, F),
                N = t => w.test(t),
                U = t => tt(t, ts, L),
                W = t => tt(t, to, j),
                $ = t => tt(t, tr, F),
                G = t => tt(t, ti, B),
                q = t => tt(t, tl, I),
                K = t => k.test(t),
                X = t => te(t, ts),
                H = t => te(t, ta),
                Y = t => te(t, tr),
                Q = t => te(t, tn),
                Z = t => te(t, ti),
                J = t => te(t, tl, !0),
                tt = (t, e, r) => {
                    let i = w.exec(t);
                    return !!i && (i[1] ? e(i[1]) : r(i[2]))
                },
                te = (t, e, r = !1) => {
                    let i = k.exec(t);
                    return !!i && (i[1] ? e(i[1]) : r)
                },
                tr = t => "position" === t || "percentage" === t,
                ti = t => "image" === t || "url" === t,
                tn = t => "length" === t || "size" === t || "bg-size" === t,
                ts = t => "length" === t,
                to = t => "number" === t,
                ta = t => "family-name" === t,
                tl = t => "shadow" === t;
            Symbol.toStringTag;
            let tu = function (t, ...e) {
                let r, i, n, s = function (a) {
                    return i = (r = f(e.reduce((t, e) => e(t), t()))).cache.get, n = r.cache.set, s = o, o(a)
                };

                function o(t) {
                    let e = i(t);
                    if (e) return e;
                    let s = v(t, r);
                    return n(t, s), s
                }
                return function () {
                    return s(y.apply(null, arguments))
                }
            }(() => {
                let t = x("color"),
                    e = x("font"),
                    r = x("text"),
                    i = x("font-weight"),
                    n = x("tracking"),
                    s = x("leading"),
                    o = x("breakpoint"),
                    a = x("container"),
                    l = x("spacing"),
                    u = x("radius"),
                    d = x("shadow"),
                    h = x("inset-shadow"),
                    c = x("text-shadow"),
                    p = x("drop-shadow"),
                    m = x("blur"),
                    f = x("perspective"),
                    g = x("aspect"),
                    v = x("ease"),
                    y = x("animate"),
                    b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    w = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
                    k = () => [...w(), K, N],
                    P = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    S = () => ["auto", "contain", "none"],
                    T = () => [K, N, l],
                    A = () => [C, "full", "auto", ...T()],
                    E = () => [V, "none", "subgrid", K, N],
                    M = () => ["auto", {
                        span: ["full", V, K, N]
                    }, V, K, N],
                    L = () => [V, "auto", K, N],
                    F = () => ["auto", "min", "max", "fr", K, N],
                    I = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
                    B = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
                    tt = () => ["auto", ...T()],
                    te = () => [C, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...T()],
                    tr = () => [t, K, N],
                    ti = () => [...w(), Y, $, {
                        position: [K, N]
                    }],
                    tn = () => ["no-repeat", {
                        repeat: ["", "x", "y", "space", "round"]
                    }],
                    ts = () => ["auto", "cover", "contain", Q, z, {
                        size: [K, N]
                    }],
                    to = () => [O, X, U],
                    ta = () => ["", "none", "full", u, K, N],
                    tl = () => ["", j, X, U],
                    tu = () => ["solid", "dashed", "dotted", "double"],
                    td = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                    th = () => [j, O, Y, $],
                    tc = () => ["", "none", m, K, N],
                    tp = () => ["none", j, K, N],
                    tm = () => ["none", j, K, N],
                    tf = () => [j, K, N],
                    tg = () => [C, "full", ...T()];
                return {
                    cacheSize: 500,
                    theme: {
                        animate: ["spin", "ping", "pulse", "bounce"],
                        aspect: ["video"],
                        blur: [D],
                        breakpoint: [D],
                        color: [R],
                        container: [D],
                        "drop-shadow": [D],
                        ease: ["in", "out", "in-out"],
                        font: [_],
                        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                        "inset-shadow": [D],
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                        radius: [D],
                        shadow: [D],
                        spacing: ["px", j],
                        text: [D],
                        "text-shadow": [D],
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", C, N, K, g]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [j, N, K, a]
                        }],
                        "break-after": [{
                            "break-after": b()
                        }],
                        "break-before": [{
                            "break-before": b()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        sr: ["sr-only", "not-sr-only"],
                        float: [{
                            float: ["right", "left", "none", "start", "end"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none", "start", "end"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: k()
                        }],
                        overflow: [{
                            overflow: P()
                        }],
                        "overflow-x": [{
                            "overflow-x": P()
                        }],
                        "overflow-y": [{
                            "overflow-y": P()
                        }],
                        overscroll: [{
                            overscroll: S()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": S()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": S()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: A()
                        }],
                        "inset-x": [{
                            "inset-x": A()
                        }],
                        "inset-y": [{
                            "inset-y": A()
                        }],
                        start: [{
                            start: A()
                        }],
                        end: [{
                            end: A()
                        }],
                        top: [{
                            top: A()
                        }],
                        right: [{
                            right: A()
                        }],
                        bottom: [{
                            bottom: A()
                        }],
                        left: [{
                            left: A()
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: [V, "auto", K, N]
                        }],
                        basis: [{
                            basis: [C, "full", "auto", a, ...T()]
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["nowrap", "wrap", "wrap-reverse"]
                        }],
                        flex: [{
                            flex: [j, C, "auto", "initial", "none", N]
                        }],
                        grow: [{
                            grow: ["", j, K, N]
                        }],
                        shrink: [{
                            shrink: ["", j, K, N]
                        }],
                        order: [{
                            order: [V, "first", "last", "none", K, N]
                        }],
                        "grid-cols": [{
                            "grid-cols": E()
                        }],
                        "col-start-end": [{
                            col: M()
                        }],
                        "col-start": [{
                            "col-start": L()
                        }],
                        "col-end": [{
                            "col-end": L()
                        }],
                        "grid-rows": [{
                            "grid-rows": E()
                        }],
                        "row-start-end": [{
                            row: M()
                        }],
                        "row-start": [{
                            "row-start": L()
                        }],
                        "row-end": [{
                            "row-end": L()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": F()
                        }],
                        "auto-rows": [{
                            "auto-rows": F()
                        }],
                        gap: [{
                            gap: T()
                        }],
                        "gap-x": [{
                            "gap-x": T()
                        }],
                        "gap-y": [{
                            "gap-y": T()
                        }],
                        "justify-content": [{
                            justify: [...I(), "normal"]
                        }],
                        "justify-items": [{
                            "justify-items": [...B(), "normal"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", ...B()]
                        }],
                        "align-content": [{
                            content: ["normal", ...I()]
                        }],
                        "align-items": [{
                            items: [...B(), {
                                baseline: ["", "last"]
                            }]
                        }],
                        "align-self": [{
                            self: ["auto", ...B(), {
                                baseline: ["", "last"]
                            }]
                        }],
                        "place-content": [{
                            "place-content": I()
                        }],
                        "place-items": [{
                            "place-items": [...B(), "baseline"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", ...B()]
                        }],
                        p: [{
                            p: T()
                        }],
                        px: [{
                            px: T()
                        }],
                        py: [{
                            py: T()
                        }],
                        ps: [{
                            ps: T()
                        }],
                        pe: [{
                            pe: T()
                        }],
                        pt: [{
                            pt: T()
                        }],
                        pr: [{
                            pr: T()
                        }],
                        pb: [{
                            pb: T()
                        }],
                        pl: [{
                            pl: T()
                        }],
                        m: [{
                            m: tt()
                        }],
                        mx: [{
                            mx: tt()
                        }],
                        my: [{
                            my: tt()
                        }],
                        ms: [{
                            ms: tt()
                        }],
                        me: [{
                            me: tt()
                        }],
                        mt: [{
                            mt: tt()
                        }],
                        mr: [{
                            mr: tt()
                        }],
                        mb: [{
                            mb: tt()
                        }],
                        ml: [{
                            ml: tt()
                        }],
                        "space-x": [{
                            "space-x": T()
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": T()
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        size: [{
                            size: te()
                        }],
                        w: [{
                            w: [a, "screen", ...te()]
                        }],
                        "min-w": [{
                            "min-w": [a, "screen", "none", ...te()]
                        }],
                        "max-w": [{
                            "max-w": [a, "screen", "none", "prose", {
                                screen: [o]
                            }, ...te()]
                        }],
                        h: [{
                            h: ["screen", "lh", ...te()]
                        }],
                        "min-h": [{
                            "min-h": ["screen", "lh", "none", ...te()]
                        }],
                        "max-h": [{
                            "max-h": ["screen", "lh", ...te()]
                        }],
                        "font-size": [{
                            text: ["base", r, X, U]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: [i, K, W]
                        }],
                        "font-stretch": [{
                            "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", O, N]
                        }],
                        "font-family": [{
                            font: [H, N, e]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                        tracking: [{
                            tracking: [n, K, N]
                        }],
                        "line-clamp": [{
                            "line-clamp": [j, "none", K, W]
                        }],
                        leading: [{
                            leading: [s, ...T()]
                        }],
                        "list-image": [{
                            "list-image": ["none", K, N]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "list-style-type": [{
                            list: ["disc", "decimal", "none", K, N]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "placeholder-color": [{
                            placeholder: tr()
                        }],
                        "text-color": [{
                            text: tr()
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...tu(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: [j, "from-font", "auto", K, U]
                        }],
                        "text-decoration-color": [{
                            decoration: tr()
                        }],
                        "underline-offset": [{
                            "underline-offset": [j, "auto", K, N]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{
                            text: ["wrap", "nowrap", "balance", "pretty"]
                        }],
                        indent: [{
                            indent: T()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", K, N]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        wrap: [{
                            wrap: ["break-word", "anywhere", "normal"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", K, N]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: ti()
                        }],
                        "bg-repeat": [{
                            bg: tn()
                        }],
                        "bg-size": [{
                            bg: ts()
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                linear: [{
                                    to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                                }, V, K, N],
                                radial: ["", K, N],
                                conic: [V, K, N]
                            }, Z, G]
                        }],
                        "bg-color": [{
                            bg: tr()
                        }],
                        "gradient-from-pos": [{
                            from: to()
                        }],
                        "gradient-via-pos": [{
                            via: to()
                        }],
                        "gradient-to-pos": [{
                            to: to()
                        }],
                        "gradient-from": [{
                            from: tr()
                        }],
                        "gradient-via": [{
                            via: tr()
                        }],
                        "gradient-to": [{
                            to: tr()
                        }],
                        rounded: [{
                            rounded: ta()
                        }],
                        "rounded-s": [{
                            "rounded-s": ta()
                        }],
                        "rounded-e": [{
                            "rounded-e": ta()
                        }],
                        "rounded-t": [{
                            "rounded-t": ta()
                        }],
                        "rounded-r": [{
                            "rounded-r": ta()
                        }],
                        "rounded-b": [{
                            "rounded-b": ta()
                        }],
                        "rounded-l": [{
                            "rounded-l": ta()
                        }],
                        "rounded-ss": [{
                            "rounded-ss": ta()
                        }],
                        "rounded-se": [{
                            "rounded-se": ta()
                        }],
                        "rounded-ee": [{
                            "rounded-ee": ta()
                        }],
                        "rounded-es": [{
                            "rounded-es": ta()
                        }],
                        "rounded-tl": [{
                            "rounded-tl": ta()
                        }],
                        "rounded-tr": [{
                            "rounded-tr": ta()
                        }],
                        "rounded-br": [{
                            "rounded-br": ta()
                        }],
                        "rounded-bl": [{
                            "rounded-bl": ta()
                        }],
                        "border-w": [{
                            border: tl()
                        }],
                        "border-w-x": [{
                            "border-x": tl()
                        }],
                        "border-w-y": [{
                            "border-y": tl()
                        }],
                        "border-w-s": [{
                            "border-s": tl()
                        }],
                        "border-w-e": [{
                            "border-e": tl()
                        }],
                        "border-w-t": [{
                            "border-t": tl()
                        }],
                        "border-w-r": [{
                            "border-r": tl()
                        }],
                        "border-w-b": [{
                            "border-b": tl()
                        }],
                        "border-w-l": [{
                            "border-l": tl()
                        }],
                        "divide-x": [{
                            "divide-x": tl()
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": tl()
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "border-style": [{
                            border: [...tu(), "hidden", "none"]
                        }],
                        "divide-style": [{
                            divide: [...tu(), "hidden", "none"]
                        }],
                        "border-color": [{
                            border: tr()
                        }],
                        "border-color-x": [{
                            "border-x": tr()
                        }],
                        "border-color-y": [{
                            "border-y": tr()
                        }],
                        "border-color-s": [{
                            "border-s": tr()
                        }],
                        "border-color-e": [{
                            "border-e": tr()
                        }],
                        "border-color-t": [{
                            "border-t": tr()
                        }],
                        "border-color-r": [{
                            "border-r": tr()
                        }],
                        "border-color-b": [{
                            "border-b": tr()
                        }],
                        "border-color-l": [{
                            "border-l": tr()
                        }],
                        "divide-color": [{
                            divide: tr()
                        }],
                        "outline-style": [{
                            outline: [...tu(), "none", "hidden"]
                        }],
                        "outline-offset": [{
                            "outline-offset": [j, K, N]
                        }],
                        "outline-w": [{
                            outline: ["", j, X, U]
                        }],
                        "outline-color": [{
                            outline: tr()
                        }],
                        shadow: [{
                            shadow: ["", "none", d, J, q]
                        }],
                        "shadow-color": [{
                            shadow: tr()
                        }],
                        "inset-shadow": [{
                            "inset-shadow": ["none", h, J, q]
                        }],
                        "inset-shadow-color": [{
                            "inset-shadow": tr()
                        }],
                        "ring-w": [{
                            ring: tl()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: tr()
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [j, U]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": tr()
                        }],
                        "inset-ring-w": [{
                            "inset-ring": tl()
                        }],
                        "inset-ring-color": [{
                            "inset-ring": tr()
                        }],
                        "text-shadow": [{
                            "text-shadow": ["none", c, J, q]
                        }],
                        "text-shadow-color": [{
                            "text-shadow": tr()
                        }],
                        opacity: [{
                            opacity: [j, K, N]
                        }],
                        "mix-blend": [{
                            "mix-blend": [...td(), "plus-darker", "plus-lighter"]
                        }],
                        "bg-blend": [{
                            "bg-blend": td()
                        }],
                        "mask-clip": [{
                            "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                        }, "mask-no-clip"],
                        "mask-composite": [{
                            mask: ["add", "subtract", "intersect", "exclude"]
                        }],
                        "mask-image-linear-pos": [{
                            "mask-linear": [j]
                        }],
                        "mask-image-linear-from-pos": [{
                            "mask-linear-from": th()
                        }],
                        "mask-image-linear-to-pos": [{
                            "mask-linear-to": th()
                        }],
                        "mask-image-linear-from-color": [{
                            "mask-linear-from": tr()
                        }],
                        "mask-image-linear-to-color": [{
                            "mask-linear-to": tr()
                        }],
                        "mask-image-t-from-pos": [{
                            "mask-t-from": th()
                        }],
                        "mask-image-t-to-pos": [{
                            "mask-t-to": th()
                        }],
                        "mask-image-t-from-color": [{
                            "mask-t-from": tr()
                        }],
                        "mask-image-t-to-color": [{
                            "mask-t-to": tr()
                        }],
                        "mask-image-r-from-pos": [{
                            "mask-r-from": th()
                        }],
                        "mask-image-r-to-pos": [{
                            "mask-r-to": th()
                        }],
                        "mask-image-r-from-color": [{
                            "mask-r-from": tr()
                        }],
                        "mask-image-r-to-color": [{
                            "mask-r-to": tr()
                        }],
                        "mask-image-b-from-pos": [{
                            "mask-b-from": th()
                        }],
                        "mask-image-b-to-pos": [{
                            "mask-b-to": th()
                        }],
                        "mask-image-b-from-color": [{
                            "mask-b-from": tr()
                        }],
                        "mask-image-b-to-color": [{
                            "mask-b-to": tr()
                        }],
                        "mask-image-l-from-pos": [{
                            "mask-l-from": th()
                        }],
                        "mask-image-l-to-pos": [{
                            "mask-l-to": th()
                        }],
                        "mask-image-l-from-color": [{
                            "mask-l-from": tr()
                        }],
                        "mask-image-l-to-color": [{
                            "mask-l-to": tr()
                        }],
                        "mask-image-x-from-pos": [{
                            "mask-x-from": th()
                        }],
                        "mask-image-x-to-pos": [{
                            "mask-x-to": th()
                        }],
                        "mask-image-x-from-color": [{
                            "mask-x-from": tr()
                        }],
                        "mask-image-x-to-color": [{
                            "mask-x-to": tr()
                        }],
                        "mask-image-y-from-pos": [{
                            "mask-y-from": th()
                        }],
                        "mask-image-y-to-pos": [{
                            "mask-y-to": th()
                        }],
                        "mask-image-y-from-color": [{
                            "mask-y-from": tr()
                        }],
                        "mask-image-y-to-color": [{
                            "mask-y-to": tr()
                        }],
                        "mask-image-radial": [{
                            "mask-radial": [K, N]
                        }],
                        "mask-image-radial-from-pos": [{
                            "mask-radial-from": th()
                        }],
                        "mask-image-radial-to-pos": [{
                            "mask-radial-to": th()
                        }],
                        "mask-image-radial-from-color": [{
                            "mask-radial-from": tr()
                        }],
                        "mask-image-radial-to-color": [{
                            "mask-radial-to": tr()
                        }],
                        "mask-image-radial-shape": [{
                            "mask-radial": ["circle", "ellipse"]
                        }],
                        "mask-image-radial-size": [{
                            "mask-radial": [{
                                closest: ["side", "corner"],
                                farthest: ["side", "corner"]
                            }]
                        }],
                        "mask-image-radial-pos": [{
                            "mask-radial-at": w()
                        }],
                        "mask-image-conic-pos": [{
                            "mask-conic": [j]
                        }],
                        "mask-image-conic-from-pos": [{
                            "mask-conic-from": th()
                        }],
                        "mask-image-conic-to-pos": [{
                            "mask-conic-to": th()
                        }],
                        "mask-image-conic-from-color": [{
                            "mask-conic-from": tr()
                        }],
                        "mask-image-conic-to-color": [{
                            "mask-conic-to": tr()
                        }],
                        "mask-mode": [{
                            mask: ["alpha", "luminance", "match"]
                        }],
                        "mask-origin": [{
                            "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                        }],
                        "mask-position": [{
                            mask: ti()
                        }],
                        "mask-repeat": [{
                            mask: tn()
                        }],
                        "mask-size": [{
                            mask: ts()
                        }],
                        "mask-type": [{
                            "mask-type": ["alpha", "luminance"]
                        }],
                        "mask-image": [{
                            mask: ["none", K, N]
                        }],
                        filter: [{
                            filter: ["", "none", K, N]
                        }],
                        blur: [{
                            blur: tc()
                        }],
                        brightness: [{
                            brightness: [j, K, N]
                        }],
                        contrast: [{
                            contrast: [j, K, N]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", p, J, q]
                        }],
                        "drop-shadow-color": [{
                            "drop-shadow": tr()
                        }],
                        grayscale: [{
                            grayscale: ["", j, K, N]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [j, K, N]
                        }],
                        invert: [{
                            invert: ["", j, K, N]
                        }],
                        saturate: [{
                            saturate: [j, K, N]
                        }],
                        sepia: [{
                            sepia: ["", j, K, N]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none", K, N]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": tc()
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [j, K, N]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [j, K, N]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": ["", j, K, N]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [j, K, N]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": ["", j, K, N]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [j, K, N]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [j, K, N]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": ["", j, K, N]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": T()
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": T()
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": T()
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", K, N]
                        }],
                        "transition-behavior": [{
                            transition: ["normal", "discrete"]
                        }],
                        duration: [{
                            duration: [j, "initial", K, N]
                        }],
                        ease: [{
                            ease: ["linear", "initial", v, K, N]
                        }],
                        delay: [{
                            delay: [j, K, N]
                        }],
                        animate: [{
                            animate: ["none", y, K, N]
                        }],
                        backface: [{
                            backface: ["hidden", "visible"]
                        }],
                        perspective: [{
                            perspective: [f, K, N]
                        }],
                        "perspective-origin": [{
                            "perspective-origin": k()
                        }],
                        rotate: [{
                            rotate: tp()
                        }],
                        "rotate-x": [{
                            "rotate-x": tp()
                        }],
                        "rotate-y": [{
                            "rotate-y": tp()
                        }],
                        "rotate-z": [{
                            "rotate-z": tp()
                        }],
                        scale: [{
                            scale: tm()
                        }],
                        "scale-x": [{
                            "scale-x": tm()
                        }],
                        "scale-y": [{
                            "scale-y": tm()
                        }],
                        "scale-z": [{
                            "scale-z": tm()
                        }],
                        "scale-3d": ["scale-3d"],
                        skew: [{
                            skew: tf()
                        }],
                        "skew-x": [{
                            "skew-x": tf()
                        }],
                        "skew-y": [{
                            "skew-y": tf()
                        }],
                        transform: [{
                            transform: [K, N, "", "none", "gpu", "cpu"]
                        }],
                        "transform-origin": [{
                            origin: k()
                        }],
                        "transform-style": [{
                            transform: ["3d", "flat"]
                        }],
                        translate: [{
                            translate: tg()
                        }],
                        "translate-x": [{
                            "translate-x": tg()
                        }],
                        "translate-y": [{
                            "translate-y": tg()
                        }],
                        "translate-z": [{
                            "translate-z": tg()
                        }],
                        "translate-none": ["translate-none"],
                        accent: [{
                            accent: tr()
                        }],
                        appearance: [{
                            appearance: ["none", "auto"]
                        }],
                        "caret-color": [{
                            caret: tr()
                        }],
                        "color-scheme": [{
                            scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                        }],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", K, N]
                        }],
                        "field-sizing": [{
                            "field-sizing": ["fixed", "content"]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["auto", "none"]
                        }],
                        resize: [{
                            resize: ["none", "", "y", "x"]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": T()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": T()
                        }],
                        "scroll-my": [{
                            "scroll-my": T()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": T()
                        }],
                        "scroll-me": [{
                            "scroll-me": T()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": T()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": T()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": T()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": T()
                        }],
                        "scroll-p": [{
                            "scroll-p": T()
                        }],
                        "scroll-px": [{
                            "scroll-px": T()
                        }],
                        "scroll-py": [{
                            "scroll-py": T()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": T()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": T()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": T()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": T()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": T()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": T()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", K, N]
                        }],
                        fill: [{
                            fill: ["none", ...tr()]
                        }],
                        "stroke-w": [{
                            stroke: [j, X, U, W]
                        }],
                        stroke: [{
                            stroke: ["none", ...tr()]
                        }],
                        "forced-color-adjust": [{
                            "forced-color-adjust": ["auto", "none"]
                        }]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        translate: ["translate-x", "translate-y", "translate-none"],
                        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    },
                    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
                }
            })
        },
        9708: (t, e, r) => {
            r.d(e, {
                DX: () => a,
                TL: () => o
            });
            var i = r(2115),
                n = r(6101),
                s = r(5155);

            function o(t) {
                let e = function (t) {
                    let e = i.forwardRef((t, e) => {
                        let {
                            children: r,
                            ...s
                        } = t;
                        if (i.isValidElement(r)) {
                            var o;
                            let t, a, l = (o = r, (a = (t = Object.getOwnPropertyDescriptor(o.props, "ref")?.get) && "isReactWarning" in t && t.isReactWarning) ? o.ref : (a = (t = Object.getOwnPropertyDescriptor(o, "ref")?.get) && "isReactWarning" in t && t.isReactWarning) ? o.props.ref : o.props.ref || o.ref), u = function (t, e) {
                                let r = {
                                    ...e
                                };
                                for (let i in e) {
                                    let n = t[i],
                                        s = e[i];
                                    /^on[A-Z]/.test(i) ? n && s ? r[i] = (...t) => {
                                        let e = s(...t);
                                        return n(...t), e
                                    } : n && (r[i] = n) : "style" === i ? r[i] = {
                                        ...n,
                                        ...s
                                    } : "className" === i && (r[i] = [n, s].filter(Boolean).join(" "))
                                }
                                return {
                                    ...t,
                                    ...r
                                }
                            }(s, r.props);
                            return r.type !== i.Fragment && (u.ref = e ? (0, n.t)(e, l) : l), i.cloneElement(r, u)
                        }
                        return i.Children.count(r) > 1 ? i.Children.only(null) : null
                    });
                    return e.displayName = `${t}.SlotClone`, e
                }(t),
                    r = i.forwardRef((t, r) => {
                        let {
                            children: n,
                            ...o
                        } = t, a = i.Children.toArray(n), l = a.find(u);
                        if (l) {
                            let t = l.props.children,
                                n = a.map(e => e !== l ? e : i.Children.count(t) > 1 ? i.Children.only(null) : i.isValidElement(t) ? t.props.children : null);
                            return (0, s.jsx)(e, {
                                ...o,
                                ref: r,
                                children: i.isValidElement(t) ? i.cloneElement(t, void 0, n) : null
                            })
                        }
                        return (0, s.jsx)(e, {
                            ...o,
                            ref: r,
                            children: n
                        })
                    });
                return r.displayName = `${t}.Slot`, r
            }
            var a = o("Slot"),
                l = Symbol("radix.slottable");

            function u(t) {
                return i.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === l
            }
        },
        9782: (t, e, r) => {
            r.d(e, {
                x: () => n
            });
            var i = r(6983);

            function n(t) {
                return (0, i.G)(t) && "ownerSVGElement" in t
            }
        },
        9827: (t, e, r) => {
            r.d(e, {
                l: () => i
            });
            let i = t => t
        },
        9946: (t, e, r) => {
            r.d(e, {
                A: () => h
            });
            var i = r(2115);
            let n = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                s = t => t.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, e, r) => r ? r.toUpperCase() : e.toLowerCase()),
                o = t => {
                    let e = s(t);
                    return e.charAt(0).toUpperCase() + e.slice(1)
                },
                a = function () {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return e.filter((t, e, r) => !!t && "" !== t.trim() && r.indexOf(t) === e).join(" ").trim()
                },
                l = t => {
                    for (let e in t)
                        if (e.startsWith("aria-") || "role" === e || "title" === e) return !0
                };
            var u = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            let d = (0, i.forwardRef)((t, e) => {
                let {
                    color: r = "currentColor",
                    size: n = 24,
                    strokeWidth: s = 2,
                    absoluteStrokeWidth: o,
                    className: d = "",
                    children: h,
                    iconNode: c,
                    ...p
                } = t;
                return (0, i.createElement)("svg", {
                    ref: e,
                    ...u,
                    width: n,
                    height: n,
                    stroke: r,
                    strokeWidth: o ? 24 * Number(s) / Number(n) : s,
                    className: a("lucide", d),
                    ...!h && !l(p) && {
                        "aria-hidden": "true"
                    },
                    ...p
                }, [...c.map(t => {
                    let [e, r] = t;
                    return (0, i.createElement)(e, r)
                }), ...Array.isArray(h) ? h : [h]])
            }),
                h = (t, e) => {
                    let r = (0, i.forwardRef)((r, s) => {
                        let {
                            className: l,
                            ...u
                        } = r;
                        return (0, i.createElement)(d, {
                            ref: s,
                            iconNode: e,
                            className: a("lucide-".concat(n(o(t))), "lucide-".concat(t), l),
                            ...u
                        })
                    });
                    return r.displayName = o(t), r
                }
        },
        9952: (t, e, r) => {
            r.d(e, {
                f: () => tM
            });
            var i = r(8777);

            function n(t) {
                t.duration = 0, t.type
            }
            var s = r(9515),
                o = r(3191),
                a = r(1297),
                l = r(7215),
                u = r(4261),
                d = r(3704),
                h = r(4542),
                c = r(8606),
                p = r(4272),
                m = r(10),
                f = r(1335),
                g = r(8476);

            function v(t, e, r) {
                return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? t + (e - t) * 6 * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
            }
            var y = r(9064);

            function b(t, e) {
                return r => r > 0 ? e : t
            }
            var x = r(3210);
            let w = (t, e, r) => {
                let i = t * t,
                    n = r * (e * e - i) + i;
                return n < 0 ? 0 : Math.sqrt(n)
            },
                k = [f.u, y.B, g.V],
                P = t => k.find(e => e.test(t));

            function S(t) {
                let e = P(t);
                if ((0, h.$)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e) return !1;
                let r = e.parse(t);
                return e === g.V && (r = function ({
                    hue: t,
                    saturation: e,
                    lightness: r,
                    alpha: i
                }) {
                    t /= 360, r /= 100;
                    let n = 0,
                        s = 0,
                        o = 0;
                    if (e /= 100) {
                        let i = r < .5 ? r * (1 + e) : r + e - r * e,
                            a = 2 * r - i;
                        n = v(a, i, t + 1 / 3), s = v(a, i, t), o = v(a, i, t - 1 / 3)
                    } else n = s = o = r;
                    return {
                        red: Math.round(255 * n),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * o),
                        alpha: i
                    }
                }(r)), r
            }
            let T = (t, e) => {
                let r = S(t),
                    i = S(e);
                if (!r || !i) return b(t, e);
                let n = {
                    ...r
                };
                return t => (n.red = w(r.red, i.red, t), n.green = w(r.green, i.green, t), n.blue = w(r.blue, i.blue, t), n.alpha = (0, x.k)(r.alpha, i.alpha, t), y.B.transform(n))
            },
                A = new Set(["none", "hidden"]);

            function E(t, e) {
                return r => (0, x.k)(t, e, r)
            }

            function M(t) {
                return "number" == typeof t ? E : "string" == typeof t ? (0, c.p)(t) ? b : p.y.test(t) ? T : V : Array.isArray(t) ? C : "object" == typeof t ? p.y.test(t) ? T : j : b
            }

            function C(t, e) {
                let r = [...t],
                    i = r.length,
                    n = t.map((t, r) => M(t)(t, e[r]));
                return t => {
                    for (let e = 0; e < i; e++) r[e] = n[e](t);
                    return r
                }
            }

            function j(t, e) {
                let r = {
                    ...t,
                    ...e
                },
                    i = {};
                for (let n in r) void 0 !== t[n] && void 0 !== e[n] && (i[n] = M(t[n])(t[n], e[n]));
                return t => {
                    for (let e in i) r[e] = i[e](t);
                    return r
                }
            }
            let V = (t, e) => {
                let r = m.f.createTransformer(e),
                    i = (0, m.V)(t),
                    n = (0, m.V)(e);
                return i.indexes.var.length === n.indexes.var.length && i.indexes.color.length === n.indexes.color.length && i.indexes.number.length >= n.indexes.number.length ? A.has(t) && !n.values.length || A.has(e) && !i.values.length ? function (t, e) {
                    return A.has(t) ? r => r <= 0 ? t : e : r => r >= 1 ? e : t
                }(t, e) : (0, o.F)(C(function (t, e) {
                    let r = [],
                        i = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let n = 0; n < e.values.length; n++) {
                        let s = e.types[n],
                            o = t.indexes[s][i[s]],
                            a = t.values[o] ?? 0;
                        r[n] = a, i[s]++
                    }
                    return r
                }(i, n), n.values), r) : ((0, h.$)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), b(t, e))
            };

            function O(t, e, r) {
                return "number" == typeof t && "number" == typeof e && "number" == typeof r ? (0, x.k)(t, e, r) : M(t)(t, e)
            }
            let D = t => {
                let e = ({
                    timestamp: e
                }) => t(e);
                return {
                    start: (t = !0) => s.Gt.update(e, t),
                    stop: () => (0, s.WG)(e),
                    now: () => s.uv.isProcessing ? s.uv.timestamp : u.k.now()
                }
            };
            var R = r(4687),
                L = r(3945);

            function F({
                keyframes: t,
                velocity: e = 0,
                power: r = .8,
                timeConstant: i = 325,
                bounceDamping: n = 10,
                bounceStiffness: s = 500,
                modifyTarget: o,
                min: a,
                max: l,
                restDelta: u = .5,
                restSpeed: d
            }) {
                let h, c, p = t[0],
                    m = {
                        done: !1,
                        value: p
                    },
                    f = t => void 0 !== a && t < a || void 0 !== l && t > l,
                    g = t => void 0 === a ? l : void 0 === l || Math.abs(a - t) < Math.abs(l - t) ? a : l,
                    v = r * e,
                    y = p + v,
                    b = void 0 === o ? y : o(y);
                b !== y && (v = b - p);
                let x = t => -v * Math.exp(-t / i),
                    w = t => b + x(t),
                    k = t => {
                        let e = x(t),
                            r = w(t);
                        m.done = Math.abs(e) <= u, m.value = m.done ? b : r
                    },
                    P = t => {
                        f(m.value) && (h = t, c = (0, R.o)({
                            keyframes: [m.value, g(m.value)],
                            velocity: (0, L.Y)(w, t, m.value),
                            damping: n,
                            stiffness: s,
                            restDelta: u,
                            restSpeed: d
                        }))
                    };
                return P(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (c || void 0 !== h || (e = !0, k(t), P(t)), void 0 !== h && t >= h) ? c.next(t - h) : (e || k(t), m)
                    }
                }
            }
            var I = r(2039),
                B = r(1081),
                _ = r(4749),
                z = r(3387),
                N = r(9827),
                U = r(5818),
                W = r(9115);

            function $({
                duration: t = 300,
                keyframes: e,
                times: r,
                ease: i = "easeInOut"
            }) {
                var n;
                let s = (0, B.h)(i) ? i.map(_.K) : (0, _.K)(i),
                    l = {
                        done: !1,
                        value: e[0]
                    },
                    u = function (t, e, {
                        clamp: r = !0,
                        ease: i,
                        mixer: n
                    } = {}) {
                        let s = t.length;
                        if ((0, h.V)(s === e.length, "Both input and output ranges must be the same length", "range-length"), 1 === s) return () => e[0];
                        if (2 === s && e[0] === e[1]) return () => e[1];
                        let l = t[0] === t[1];
                        t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
                        let u = function (t, e, r) {
                            let i = [],
                                n = r || z.W.mix || O,
                                s = t.length - 1;
                            for (let r = 0; r < s; r++) {
                                let s = n(t[r], t[r + 1]);
                                if (e) {
                                    let t = Array.isArray(e) ? e[r] || N.l : e;
                                    s = (0, o.F)(t, s)
                                }
                                i.push(s)
                            }
                            return i
                        }(e, i, n),
                            d = u.length,
                            c = r => {
                                if (l && r < t[0]) return e[0];
                                let i = 0;
                                if (d > 1)
                                    for (; i < t.length - 2 && !(r < t[i + 1]); i++);
                                let n = (0, U.q)(t[i], t[i + 1], r);
                                return u[i](n)
                            };
                        return r ? e => c((0, a.q)(t[0], t[s - 1], e)) : c
                    }((n = r && r.length === e.length ? r : (0, W.Z)(e), n.map(e => e * t)), e, {
                        ease: Array.isArray(s) ? s : e.map(() => s || I.am).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (l.value = u(e), l.done = e >= t, l)
                }
            }
            var G = r(2458);
            let q = t => null !== t;

            function K(t, {
                repeat: e,
                repeatType: r = "loop"
            }, i, n = 1) {
                let s = t.filter(q),
                    o = n < 0 || e && "loop" !== r && e % 2 == 1 ? 0 : s.length - 1;
                return o && void 0 !== i ? i : s[o]
            }
            let X = {
                decay: F,
                inertia: F,
                tween: $,
                keyframes: $,
                spring: R.o
            };

            function H(t) {
                "string" == typeof t.type && (t.type = X[t.type])
            }
            class Y {
                constructor() {
                    this.updateFinished()
                }
                get finished() {
                    return this._finished
                }
                updateFinished() {
                    this._finished = new Promise(t => {
                        this.resolve = t
                    })
                }
                notifyFinished() {
                    this.resolve()
                }
                then(t, e) {
                    return this.finished.then(t, e)
                }
            }
            let Q = t => t / 100;
            class Z extends Y {
                constructor(t) {
                    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
                        let {
                            motionValue: t
                        } = this.options;
                        t && t.updatedAt !== u.k.now() && this.tick(u.k.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop?.())
                    }, d.q.mainThread++, this.options = t, this.initAnimation(), this.play(), !1 === t.autoplay && this.pause()
                }
                initAnimation() {
                    let {
                        options: t
                    } = this;
                    H(t);
                    let {
                        type: e = $,
                        repeat: r = 0,
                        repeatDelay: i = 0,
                        repeatType: n,
                        velocity: s = 0
                    } = t, {
                        keyframes: a
                    } = t, l = e || $;
                    l !== $ && "number" != typeof a[0] && (this.mixKeyframes = (0, o.F)(Q, O(a[0], a[1])), a = [0, 100]);
                    let u = l({
                        ...t,
                        keyframes: a
                    });
                    "mirror" === n && (this.mirroredGenerator = l({
                        ...t,
                        keyframes: [...a].reverse(),
                        velocity: -s
                    })), null === u.calculatedDuration && (u.calculatedDuration = (0, G.t)(u));
                    let {
                        calculatedDuration: d
                    } = u;
                    this.calculatedDuration = d, this.resolvedDuration = d + i, this.totalDuration = this.resolvedDuration * (r + 1) - i, this.generator = u
                }
                updateTime(t) {
                    let e = Math.round(t - this.startTime) * this.playbackSpeed;
                    null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e
                }
                tick(t, e = !1) {
                    let {
                        generator: r,
                        totalDuration: i,
                        mixKeyframes: n,
                        mirroredGenerator: s,
                        resolvedDuration: o,
                        calculatedDuration: l
                    } = this;
                    if (null === this.startTime) return r.next(0);
                    let {
                        delay: u = 0,
                        keyframes: d,
                        repeat: h,
                        repeatType: c,
                        repeatDelay: p,
                        type: m,
                        onUpdate: f,
                        finalKeyframe: g
                    } = this.options;
                    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
                    let v = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
                        y = this.playbackSpeed >= 0 ? v < 0 : v > i;
                    this.currentTime = Math.max(v, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = i);
                    let b = this.currentTime,
                        x = r;
                    if (h) {
                        let t = Math.min(this.currentTime, i) / o,
                            e = Math.floor(t),
                            r = t % 1;
                        !r && t >= 1 && (r = 1), 1 === r && e--, (e = Math.min(e, h + 1)) % 2 && ("reverse" === c ? (r = 1 - r, p && (r -= p / o)) : "mirror" === c && (x = s)), b = (0, a.q)(0, 1, r) * o
                    }
                    let w = y ? {
                        done: !1,
                        value: d[0]
                    } : x.next(b);
                    n && (w.value = n(w.value));
                    let {
                        done: k
                    } = w;
                    y || null === l || (k = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
                    let P = null === this.holdTime && ("finished" === this.state || "running" === this.state && k);
                    return P && m !== F && (w.value = K(d, this.options, g, this.speed)), f && f(w.value), P && this.finish(), w
                }
                then(t, e) {
                    return this.finished.then(t, e)
                }
                get duration() {
                    return (0, l.X)(this.calculatedDuration)
                }
                get time() {
                    return (0, l.X)(this.currentTime)
                }
                set time(t) {
                    t = (0, l.f)(t), this.currentTime = t, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver?.start(!1)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(t) {
                    this.updateTime(u.k.now());
                    let e = this.playbackSpeed !== t;
                    this.playbackSpeed = t, e && (this.time = (0, l.X)(this.currentTime))
                }
                play() {
                    if (this.isStopped) return;
                    let {
                        driver: t = D,
                        startTime: e
                    } = this.options;
                    this.driver || (this.driver = t(t => this.tick(t))), this.options.onPlay?.();
                    let r = this.driver.now();
                    "finished" === this.state ? (this.updateFinished(), this.startTime = r) : null !== this.holdTime ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = e ?? r), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
                }
                pause() {
                    this.state = "paused", this.updateTime(u.k.now()), this.holdTime = this.currentTime
                }
                complete() {
                    "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null
                }
                finish() {
                    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.()
                }
                cancel() {
                    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.()
                }
                teardown() {
                    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, d.q.mainThread--
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), this.driver = void 0)
                }
                sample(t) {
                    return this.startTime = 0, this.tick(t, !0)
                }
                attachTimeline(t) {
                    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this)
                }
            }
            var J = r(7322);
            let tt = t => t.startsWith("--");

            function te(t) {
                let e;
                return () => (void 0 === e && (e = t()), e)
            }
            let tr = te(() => void 0 !== window.ScrollTimeline);
            var ti = r(4744),
                tn = r(8589);
            let ts = {},
                to = function (t, e) {
                    let r = te(t);
                    return () => ts[e] ?? r()
                }(() => {
                    try {
                        document.createElement("div").animate({
                            opacity: 0
                        }, {
                            easing: "linear(0, 1)"
                        })
                    } catch (t) {
                        return !1
                    }
                    return !0
                }, "linearEasing");
            var ta = r(7705);
            let tl = ([t, e, r, i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`,
                tu = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: tl([0, .65, .55, 1]),
                    circOut: tl([.55, 0, 1, .45]),
                    backIn: tl([.31, .01, .66, -.59]),
                    backOut: tl([.33, 1.53, .69, .99])
                };
            var td = r(3128);
            class th extends Y {
                constructor(t) {
                    if (super(), this.finishedTime = null, this.isStopped = !1, !t) return;
                    let {
                        element: e,
                        name: r,
                        keyframes: i,
                        pseudoElement: n,
                        allowFlatten: s = !1,
                        finalKeyframe: o,
                        onComplete: a
                    } = t;
                    this.isPseudoElement = !!n, this.allowFlatten = s, this.options = t, (0, h.V)("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
                    let l = function ({
                        type: t,
                        ...e
                    }) {
                        return (0, td.W)(t) && to() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e)
                    }(t);
                    this.animation = function (t, e, r, {
                        delay: i = 0,
                        duration: n = 300,
                        repeat: s = 0,
                        repeatType: o = "loop",
                        ease: a = "easeOut",
                        times: l
                    } = {}, u) {
                        let h = {
                            [e]: r
                        };
                        l && (h.offset = l);
                        let c = function t(e, r) {
                            if (e) return "function" == typeof e ? to() ? (0, ta.K)(e, r) : "ease-out" : (0, tn.D)(e) ? tl(e) : Array.isArray(e) ? e.map(e => t(e, r) || tu.easeOut) : tu[e]
                        }(a, n);
                        Array.isArray(c) && (h.easing = c), ti.Q.value && d.q.waapi++;
                        let p = {
                            delay: i,
                            duration: n,
                            easing: Array.isArray(c) ? "linear" : c,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === o ? "alternate" : "normal"
                        };
                        u && (p.pseudoElement = u);
                        let m = t.animate(h, p);
                        return ti.Q.value && m.finished.finally(() => {
                            d.q.waapi--
                        }), m
                    }(e, r, i, l, n), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
                        if (this.finishedTime = this.time, !n) {
                            let t = K(i, this.options, o, this.speed);
                            this.updateMotionValue ? this.updateMotionValue(t) : function (t, e, r) {
                                tt(e) ? t.style.setProperty(e, r) : t.style[e] = r
                            }(e, r, t), this.animation.cancel()
                        }
                        a?.(), this.notifyFinished()
                    }
                }
                play() {
                    this.isStopped || (this.animation.play(), "finished" === this.state && this.updateFinished())
                }
                pause() {
                    this.animation.pause()
                }
                complete() {
                    this.animation.finish?.()
                }
                cancel() {
                    try {
                        this.animation.cancel()
                    } catch (t) { }
                }
                stop() {
                    if (this.isStopped) return;
                    this.isStopped = !0;
                    let {
                        state: t
                    } = this;
                    "idle" !== t && "finished" !== t && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
                }
                commitStyles() {
                    this.isPseudoElement || this.animation.commitStyles?.()
                }
                get duration() {
                    let t = this.animation.effect?.getComputedTiming?.().duration || 0;
                    return (0, l.X)(Number(t))
                }
                get time() {
                    return (0, l.X)(Number(this.animation.currentTime) || 0)
                }
                set time(t) {
                    this.finishedTime = null, this.animation.currentTime = (0, l.f)(t)
                }
                get speed() {
                    return this.animation.playbackRate
                }
                set speed(t) {
                    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
                }
                get state() {
                    return null !== this.finishedTime ? "finished" : this.animation.playState
                }
                get startTime() {
                    return Number(this.animation.startTime)
                }
                set startTime(t) {
                    this.animation.startTime = t
                }
                attachTimeline({
                    timeline: t,
                    observe: e
                }) {
                    return (this.allowFlatten && this.animation.effect?.updateTiming({
                        easing: "linear"
                    }), this.animation.onfinish = null, t && tr()) ? (this.animation.timeline = t, N.l) : e(this)
                }
            }
            var tc = r(6009),
                tp = r(3972),
                tm = r(7712);
            let tf = {
                anticipate: tc.b,
                backInOut: tp.ZZ,
                circInOut: tm.tn
            };
            class tg extends th {
                constructor(t) {
                    ! function (t) {
                        "string" == typeof t.ease && t.ease in tf && (t.ease = tf[t.ease])
                    }(t), H(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t
                }
                updateMotionValue(t) {
                    let {
                        motionValue: e,
                        onUpdate: r,
                        onComplete: i,
                        element: n,
                        ...s
                    } = this.options;
                    if (!e) return;
                    if (void 0 !== t) return void e.set(t);
                    let o = new Z({
                        ...s,
                        autoplay: !1
                    }),
                        a = (0, l.f)(this.finishedTime ?? this.time);
                    e.setWithVelocity(o.sample(a - 10).value, o.sample(a).value, 10), o.stop()
                }
            }
            let tv = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (m.f.test(t) || "0" === t) && !t.startsWith("url(")),
                ty = new Set(["opacity", "clipPath", "filter", "transform"]),
                tb = te(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
            class tx extends Y {
                constructor({
                    autoplay: t = !0,
                    delay: e = 0,
                    type: r = "keyframes",
                    repeat: i = 0,
                    repeatDelay: n = 0,
                    repeatType: s = "loop",
                    keyframes: o,
                    name: a,
                    motionValue: l,
                    element: d,
                    ...h
                }) {
                    super(), this.stop = () => {
                        this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel()
                    }, this.createdAt = u.k.now();
                    let c = {
                        autoplay: t,
                        delay: e,
                        type: r,
                        repeat: i,
                        repeatDelay: n,
                        repeatType: s,
                        name: a,
                        motionValue: l,
                        element: d,
                        ...h
                    },
                        p = d?.KeyframeResolver || J.h;
                    this.keyframeResolver = new p(o, (t, e, r) => this.onKeyframesResolved(t, e, c, !r), a, l, d), this.keyframeResolver?.scheduleResolve()
                }
                onKeyframesResolved(t, e, r, i) {
                    this.keyframeResolver = void 0;
                    let {
                        name: s,
                        type: o,
                        velocity: a,
                        delay: l,
                        isHandoff: d,
                        onUpdate: c
                    } = r;
                    this.resolvedAt = u.k.now(), ! function (t, e, r, i) {
                        let n = t[0];
                        if (null === n) return !1;
                        if ("display" === e || "visibility" === e) return !0;
                        let s = t[t.length - 1],
                            o = tv(n, e),
                            a = tv(s, e);
                        return (0, h.$)(o === a, `You are trying to animate ${e} from "${n}" to "${s}". "${o ? s : n}" is not an animatable value.`, "value-not-animatable"), !!o && !!a && (function (t) {
                            let e = t[0];
                            if (1 === t.length) return !0;
                            for (let r = 0; r < t.length; r++)
                                if (t[r] !== e) return !0
                        }(t) || ("spring" === r || (0, td.W)(r)) && i)
                    }(t, s, o, a) && ((z.W.instantAnimations || !l) && c?.(K(t, r, e)), t[0] = t[t.length - 1], n(r), r.repeat = 0);
                    let p = {
                        startTime: i ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                        finalKeyframe: e,
                        ...r,
                        keyframes: t
                    },
                        m = !d && function (t) {
                            let {
                                motionValue: e,
                                name: r,
                                repeatDelay: i,
                                repeatType: n,
                                damping: s,
                                type: o
                            } = t;
                            if (!(e?.owner?.current instanceof HTMLElement)) return !1;
                            let {
                                onUpdate: a,
                                transformTemplate: l
                            } = e.owner.getProps();
                            return tb() && r && ty.has(r) && ("transform" !== r || !l) && !a && !i && "mirror" !== n && 0 !== s && "inertia" !== o
                        }(p) ? new tg({
                            ...p,
                            element: p.motionValue.owner.current
                        }) : new Z(p);
                    m.finished.then(() => this.notifyFinished()).catch(N.l), this.pendingTimeline && (this.stopTimeline = m.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = m
                }
                get finished() {
                    return this._animation ? this.animation.finished : this._finished
                }
                then(t, e) {
                    return this.finished.finally(t).then(() => { })
                }
                get animation() {
                    return this._animation || (this.keyframeResolver?.resume(), (0, J.q)()), this._animation
                }
                get duration() {
                    return this.animation.duration
                }
                get time() {
                    return this.animation.time
                }
                set time(t) {
                    this.animation.time = t
                }
                get speed() {
                    return this.animation.speed
                }
                get state() {
                    return this.animation.state
                }
                set speed(t) {
                    this.animation.speed = t
                }
                get startTime() {
                    return this.animation.startTime
                }
                attachTimeline(t) {
                    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
                }
                play() {
                    this.animation.play()
                }
                pause() {
                    this.animation.pause()
                }
                complete() {
                    this.animation.complete()
                }
                cancel() {
                    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel()
                }
            }
            let tw = t => null !== t;
            var tk = r(18);
            let tP = {
                type: "spring",
                stiffness: 500,
                damping: 25,
                restSpeed: 10
            },
                tS = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                tT = {
                    type: "keyframes",
                    duration: .8
                },
                tA = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                tE = (t, {
                    keyframes: e
                }) => e.length > 2 ? tT : tk.f.has(t) ? t.startsWith("scale") ? tS(e[1]) : tP : tA,
                tM = (t, e, r, o = {}, a, u) => d => {
                    let h = (0, i.r)(o, t) || {},
                        c = h.delay || o.delay || 0,
                        {
                            elapsed: p = 0
                        } = o;
                    p -= (0, l.f)(c);
                    let m = {
                        keyframes: Array.isArray(r) ? r : [null, r],
                        ease: "easeOut",
                        velocity: e.getVelocity(),
                        ...h,
                        delay: -p,
                        onUpdate: t => {
                            e.set(t), h.onUpdate && h.onUpdate(t)
                        },
                        onComplete: () => {
                            d(), h.onComplete && h.onComplete()
                        },
                        name: t,
                        motionValue: e,
                        element: u ? void 0 : a
                    };
                    ! function ({
                        when: t,
                        delay: e,
                        delayChildren: r,
                        staggerChildren: i,
                        staggerDirection: n,
                        repeat: s,
                        repeatType: o,
                        repeatDelay: a,
                        from: l,
                        elapsed: u,
                        ...d
                    }) {
                        return !!Object.keys(d).length
                    }(h) && Object.assign(m, tE(t, m)), m.duration && (m.duration = (0, l.f)(m.duration)), m.repeatDelay && (m.repeatDelay = (0, l.f)(m.repeatDelay)), void 0 !== m.from && (m.keyframes[0] = m.from);
                    let f = !1;
                    if (!1 !== m.type && (0 !== m.duration || m.repeatDelay) || (n(m), 0 === m.delay && (f = !0)), (z.W.instantAnimations || z.W.skipAnimations) && (f = !0, n(m), m.delay = 0), m.allowFlatten = !h.type && !h.ease, f && !u && void 0 !== e.get()) {
                        let t = function (t, {
                            repeat: e,
                            repeatType: r = "loop"
                        }, i) {
                            let n = t.filter(tw),
                                s = e && "loop" !== r && e % 2 == 1 ? 0 : n.length - 1;
                            return n[s]
                        }(m.keyframes, h);
                        if (void 0 !== t) return void s.Gt.update(() => {
                            m.onUpdate(t), m.onComplete()
                        })
                    }
                    return h.isSync ? new Z(m) : new tx(m)
                }
        },
        9991: (t, e) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), ! function (t, e) {
                for (var r in e) Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
            }(e, {
                DecodeError: function () {
                    return m
                },
                MiddlewareNotFoundError: function () {
                    return y
                },
                MissingStaticPage: function () {
                    return v
                },
                NormalizeError: function () {
                    return f
                },
                PageNotFoundError: function () {
                    return g
                },
                SP: function () {
                    return c
                },
                ST: function () {
                    return p
                },
                WEB_VITALS: function () {
                    return r
                },
                execOnce: function () {
                    return i
                },
                getDisplayName: function () {
                    return l
                },
                getLocationOrigin: function () {
                    return o
                },
                getURL: function () {
                    return a
                },
                isAbsoluteUrl: function () {
                    return s
                },
                isResSent: function () {
                    return u
                },
                loadGetInitialProps: function () {
                    return h
                },
                normalizeRepeatedSlashes: function () {
                    return d
                },
                stringifyError: function () {
                    return b
                }
            });
            let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

            function i(t) {
                let e, r = !1;
                return function () {
                    for (var i = arguments.length, n = Array(i), s = 0; s < i; s++) n[s] = arguments[s];
                    return r || (r = !0, e = t(...n)), e
                }
            }
            let n = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                s = t => n.test(t);

            function o() {
                let {
                    protocol: t,
                    hostname: e,
                    port: r
                } = window.location;
                return t + "//" + e + (r ? ":" + r : "")
            }

            function a() {
                let {
                    href: t
                } = window.location, e = o();
                return t.substring(e.length)
            }

            function l(t) {
                return "string" == typeof t ? t : t.displayName || t.name || "Unknown"
            }

            function u(t) {
                return t.finished || t.headersSent
            }

            function d(t) {
                let e = t.split("?");
                return e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (e[1] ? "?" + e.slice(1).join("?") : "")
            }
            async function h(t, e) {
                let r = e.res || e.ctx && e.ctx.res;
                if (!t.getInitialProps) return e.ctx && e.Component ? {
                    pageProps: await h(e.Component, e.ctx)
                } : {};
                let i = await t.getInitialProps(e);
                if (r && u(r)) return i;
                if (!i) throw Object.defineProperty(Error('"' + l(t) + '.getInitialProps()" should resolve to an object. But found "' + i + '" instead.'), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: !1,
                    configurable: !0
                });
                return i
            }
            let c = "undefined" != typeof performance,
                p = c && ["mark", "measure", "getEntriesByName"].every(t => "function" == typeof performance[t]);
            class m extends Error { }
            class f extends Error { }
            class g extends Error {
                constructor(t) {
                    super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + t
                }
            }
            class v extends Error {
                constructor(t, e) {
                    super(), this.message = "Failed to load static file for page: " + t + " " + e
                }
            }
            class y extends Error {
                constructor() {
                    super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
                }
            }

            function b(t) {
                return JSON.stringify({
                    message: t.message,
                    stack: t.stack
                })
            }
        }
    }
]);