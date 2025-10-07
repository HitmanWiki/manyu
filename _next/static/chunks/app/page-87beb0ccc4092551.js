(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        61: (e, a, t) => {
            Promise.resolve().then(t.bind(t, 7156))
        },
        406: (e, a, t) => {
            "use strict";
            t.d(a, {
                $: () => i
            });
            let i = {
                siteName: "NALA",
                tokenName: "$NALA",
                siteDescription: "NALA",
                siteUrl: "https://basednala.com/",
                siteImage: "https://manyushiba.com/wp-content/uploads/2025/07/cropped-GCVXiwda0AAJvpe-modified-scaled-1.webp",
                hash: "0x000000000000000000000000",
                linkTelegram: "https://t.me/Basenala",
                linkTwitter: "https://x.com/basenala?s=21",
                linkInstagram: "https://www.instagram.com/nala_cat/",
                linkTiktok: "https://www.tiktok.com/",
                linkYoutube: "https://www.youtube.com/",
                linkGithub: "https://github.com/",
                linkMedium: "https://medium.com",
                linkDexscreener: "https://dexscreener.com/ethereum/0x000000000000000000000000",
                linkDextools: "https://www.dextools.io/app/en/ether/pair-explorer/0x000000000000000000000000?t=1752607022097",
                linkUniswap: "https://app.uniswap.org/",
                linkCoingecko: "https://www.coingecko.com/en/coins/",
                linkCmc: "https://coinmarketcap.com/currencies/",
                // linkKucoin: "https://www.kucoin.com/trade/",
                linkMexc: "https://www.mexc.com/exchange/",
                linkLbank: "https://www.lbank.com/pt-BR/trade/",
                linkBitmart: "https://www.bitmart.com/trade/en-US?symbol=",
                linkXt: "https://www.xt.com/en/trade/",
                linkPoloniex: "https://poloniex.com/pt/trade/",
                linkHotcoin: "https://www.hotcoin.com/en_US/trade/exchange/?tradeCode=",
                linkKcex: "https://www.kcex.com/exchange/",
                linkBingx: "https://bingx.com/en/spot/",
                linkEtherscan: "https://basescan.io/address/0x000000000000000000000000"
            }
        },
        3999: (e, a, t) => {
            "use strict";
            t.d(a, {
                cn: () => n
            });
            var i = t(2596),
                s = t(9688);

            function n() {
                for (var e = arguments.length, a = Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                return (0, s.QP)((0, i.$)(a))
            }
        },
        4665: (e, a, t) => {
            "use strict";
            t.d(a, {
                E: () => l
            });
            var i = t(5155),
                s = t(3999);
            let n = (0, t(2085).F)("leading-none! text-white p-0", {
                variants: {
                    size: {
                        xs: "text-xs",
                        sm: "text-sm",
                        md: "text-base",
                        lg: "text-lg",
                        xl: "text-xl",
                        huge: "text-2xl",
                        "huge-2": "text-[28px]",
                        "huge-3": "text-4xl",
                        "huge-4": "text-6xl",
                        "huge-5": "text-8xl",
                        "huge-6": "text-9xl"
                    },
                    weight: {
                        regular: "font-normal",
                        semibold: "font-semibold",
                        bold: "font-bold",
                        extraBold: "font-extrabold"
                    }
                },
                defaultVariants: {
                    size: "md",
                    weight: "regular"
                }
            }),
                l = e => {
                    let {
                        size: a,
                        weight: t,
                        tag: l,
                        children: r,
                        className: o,
                        ...c
                    } = e;
                    return (0, i.jsx)(null != l ? l : "p", {
                        className: (0, s.cn)(n({
                            size: a,
                            weight: t
                        }), o),
                        style: {
                            margin: 0,
                            padding: 0
                        },
                        ...c,
                        children: r
                    })
                };
            l.displayName = "Text"
        },
        7156: (e, a, t) => {
            "use strict";
            t.r(a), t.d(a, {
                default: () => el
            });
            var i = t(5155),
                s = t(6604),
                n = t(8431),
                l = t(2115),
                r = t(3999),
                o = t(7695),
                c = t(5363),
                d = t(3769);

            function m(e) {
                let {
                    as: a = "h1",
                    children: t,
                    className: n = ""
                } = e, m = (0, l.useRef)(null), p = (0, l.useRef)(!1), x = (0, s.W)(m, {
                    once: !0,
                    margin: "-10% 0px -10% 0px",
                    amount: .1
                });
                return (0, l.useEffect)(() => {
                    m.current && !p.current && x && document.fonts.ready.then(() => {
                        if (!m.current) return;
                        m.current.style.visibility = "visible";
                        let {
                            words: e
                        } = (0, d.Ad)(m.current);
                        (0, o.i)(e, {
                            opacity: [0, 1],
                            y: [20, 0]
                        }, {
                            type: "spring",
                            duration: 1.2,
                            bounce: .2,
                            delay: (0, c.y)(.06)
                        }), p.current = !0
                    })
                }, [x]), (0, i.jsx)(a, {
                    ref: m,
                    className: (0, r.cn)(n, "font-musashi"),
                    style: {
                        visibility: "hidden",
                        display: "inline-block"
                    },
                    children: t
                })
            }

            function p() {
                let e = (0, l.useRef)(null),
                    a = (0, s.W)(e, {
                        once: !0,
                        margin: "-10% 0px -10% 0px"
                    });
                return (0, i.jsx)("section", {
                    id: "about",
                    className: "relative flex w-full flex-col items-center justify-center overflow-hidden bg-white px-4 pb-30 text-center",
                    children: (0, i.jsx)(n?.P?.div || "div", {
                        ref: e,
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: a ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: .8,
                            ease: [.42, 0, .58, 1]
                        },
                        className: "flex w-full flex-col items-center",
                        children: [(0, i.jsx)(m, {
                            as: "h2",
                            className: "mb-6 text-3xl leading-tight font-extrasemibold text-zinc-950 md:text-4xl lg:text-5xl",
                            children: "Meet NALA"
                        }), (0, i.jsx)(n?.P?.p || "p", {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: a ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: .7,
                                ease: [.42, 0, .58, 1]
                            },
                            className: "mb-8 max-w-7xl text-lg text-background md:text-2xl text-justify",
                            children: "Nala the Cat is more than just an adorable feline "
                        }), (0, i.jsx)(n?.P?.div || "div", {
                            initial: {
                                opacity: 0,
                                y: 30,
                                scale: .95
                            },
                            animate: a ? {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            } : {},
                            transition: {
                                duration: .8,
                                delay: .3,
                                ease: [.42, 0, .58, 1]
                            },
                            className: "mb-12 w-full max-w-6xl",
                            children: (0, i.jsxs)("div", {
                                className: "grid grid-cols-1 gap-6 md:grid-cols-2 bg-background p-6 rounded-2xl box-shadow-lg",
                                children: [(0, i.jsx)(n?.P?.div || "div", {
                                    initial: {
                                        opacity: 0,
                                        x: -30
                                    },
                                    animate: a ? {
                                        opacity: 1,
                                        x: 0
                                    } : {},
                                    transition: {
                                        duration: .7,
                                        delay: .5,
                                        ease: [.42, 0, .58, 1]
                                    },
                                    className: "relative overflow-hidden rounded-lg shadow-lg",
                                    children: (0, i.jsx)("video", {
                                        className: "h-auto w-full object-cover",
                                        src: "/videos/11.mp4",
                                        autoPlay: true,
                                        loop: true,
                                        muted: true,
                                        playsInline: true,
                                        controlsList: "nodownload"
                                    })
                                }), (0, i.jsx)(n?.P?.div || "div", {
                                    initial: {
                                        opacity: 0,
                                        x: 30
                                    },
                                    animate: a ? {
                                        opacity: 1,
                                        x: 0
                                    } : {},
                                    transition: {
                                        duration: .7,
                                        delay: .7,
                                        ease: [.42, 0, .58, 1]
                                    },
                                    className: "relative overflow-hidden rounded-lg shadow-lg",
                                    children: (0, i.jsx)("video", {
                                        className: "h-auto w-full object-cover",
                                        src: "/videos/12.mp4",
                                        autoPlay: !0,
                                        loop: !0,
                                        muted: !0,
                                        playsInline: !0,
                                        controlsList: "nodownload"
                                    })
                                })]
                            })
                        }), (0, i.jsx)(n?.P?.p || "p", {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: a ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: .7,
                                delay: .9,
                                ease: [.42, 0, .58, 1]
                            },
                            className: "mb-8 max-w-7xl text-lg md:text-2xl font-background text-background text-justify",
                            children: "Nala the Cat is more than just an adorable feline — she's a record-breaking social media sensation and a heartwarming symbol of the magic of pet adoption. Born in 2010, Nala was adopted from a shelter in Los Angeles when she was just a kitten. Her human, Varisiri “Pookie” Methachittiphan, never imagined that Nala would grow up to be one of the most famous cats in the world."
                        }), (0, i.jsx)(n?.P?.p || "p", {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: a ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: .7,
                                delay: 1.1,
                                ease: [.42, 0, .58, 1]
                            },
                            className: "mb-8 max-w-7xl text-lg md:text-2xl text-justify text-background",
                            children: "With her big, round blue eyes and a perpetually curious expression, Nala quickly captured the hearts of millions. Her Instagram account, @nala_cat, boasts over 4 million followers, making her the Guinness World Record holder for the most-followed cat on Instagram."
                        })]
                    })
                })
            }

            function x() {
                let e = (0, l.useRef)(null),
                    a = (0, s.W)(e, {
                        once: !0,
                        margin: "-10% 0px -10% 0px"
                    });
                return (0, i.jsx)("section", {
                    id: "chill-relax",
                    className: "relative flex w-full flex-col items-center justify-center overflow-hidden bg-white px-4 py-30 text-center",
                    children: (0, i.jsx)(n?.P?.div || "div", {
                        ref: e,
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: a ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: .8,
                            ease: [.42, 0, .58, 1]
                        },
                        className: "flex w-full flex-col items-center",
                        children: [(0, i.jsx)(m, {
                            as: "h2",
                            className: "font-extrasemibold mb-6 text-3xl leading-tight text-zinc-950 md:text-4xl lg:text-5xl",
                            children: "Chill and relax with NALA"
                        }), (0, i.jsx)(n?.P?.div || "div", {
                            initial: {
                                opacity: 0,
                                y: 30,
                                scale: .95
                            },
                            animate: a ? {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            } : {},
                            transition: {
                                duration: .8,
                                delay: .3,
                                ease: [.42, 0, .58, 1]
                            },
                            className: "mb-12 w-full max-w-[700px]",
                            children: (0, i.jsx)("div", {
                                className: "bg-background box-shadow-lg rounded-2xl p-6",
                                children: (0, i.jsx)(n?.P?.div || "div", {
                                    initial: {
                                        opacity: 0,
                                        x: 0
                                    },
                                    animate: a ? {
                                        opacity: 1,
                                        x: 0
                                    } : {},
                                    transition: {
                                        duration: .7,
                                        delay: .5,
                                        ease: [.42, 0, .58, 1]
                                    },
                                    className: "relative overflow-hidden rounded-lg shadow-lg",
                                    children: (0, i.jsx)("video", {
                                        className: "h-auto w-full object-cover",
                                        src: "/videos/13.mp4",
                                        autoPlay: !0,
                                        loop: !0,
                                        muted: !0,
                                        playsInline: !0,
                                        controlsList: "nodownload"
                                    })
                                })
                            })
                        })]
                    })
                })
            }
            var h = t(7168),
                u = t(7532),
                g = t(4665),
                y = t(406),
                f = t(760),
                b = t(4416),
                w = t(4783),
                v = t(6766),
                j = t(6874),
                N = t.n(j),
                k = t(9911),
                M = t(4315);
            let P = [{
                logo: M.TCj,
                href: y.$.linkTwitter
            }, {
                logo: k.zyo,
                href: y.$.linkTelegram
            }, {
                logo: M.DC0,
                href: y.$.linkMedium
            }, {
                logo: k.hL4,
                href: y.$.linkGithub
            }, {
                logo: "/images/dexscreener-white.webp",
                href: y.$.linkDexscreener
            }, {
                logo: "/images/dextools-white.webp",
                href: y.$.linkDextools
            }];

            function z() {
                let [e, a] = (0, l.useState)(!1), [t, s] = (0, l.useState)(!1), [r, o] = (0, l.useState)(!0), [c, d] = (0, l.useState)(0);
                return (0, l.useEffect)(() => {
                    let e = () => {
                        let e = window.scrollY;
                        a(e > 20), e > c && e > 80 ? o(!1) : e < c && o(!0), d(e)
                    };
                    return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
                }, [c]), (0, i.jsx)(n.P?.header || "header", {
                    className: "fixed top-0 right-0 left-0 z-50 transition-all duration-300 ".concat(t ? "bg-background/80 shadow-xl backdrop-blur-2xl" : e ? "bg-background/80 shadow-lg backdrop-blur-xl" : "bg-background shadow-lg backdrop-blur-xl"),
                    variants: {
                        initial: {
                            y: -100,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        hidden: {
                            y: -100,
                            opacity: 0
                        }
                    },
                    initial: "initial",
                    animate: r ? "animate" : "hidden",
                    transition: {
                        duration: .3,
                        ease: "easeInOut"
                    },
                    children: (0, i.jsxs)("div", {
                        className: "mx-auto max-w-350 px-4 sm:px-6 lg:px-8",
                        children: [(0, i.jsxs)("div", {
                            className: "flex h-20 items-center justify-between",
                            children: [(0, i.jsx)(N(), {
                                href: "/",
                                className: "flex items-center space-x-2",
                                children: (0, i.jsx)(n?.P?.div || "div", {
                                    className: "flex items-center space-x-2",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 10
                                    },
                                    children: (0, i.jsxs)("div", {
                                        className: "flex items-center gap-4",
                                        children: [(0, i.jsx)(v.default, {
                                            src: "/images/logo.webp",
                                            alt: "NALA Logo",
                                            width: 160,
                                            height: 60,
                                            className: "h-12.5 w-auto drop-shadow-[0px_0px_10px_rgba(255,255,255,0.5)]"
                                        }), (0, i.jsxs)("div", {
                                            className: "flex flex-col gap-2",
                                            children: [(0, i.jsx)(g.E, {
                                                tag: "h1",
                                                className: "font-musashi drop-shadow-[0px_0px_10px_rgba(255,255,255,0.5)]",
                                                size: "huge-2",
                                                children: "NALA"
                                            }), (0, i.jsx)(g.E, {
                                                children: "ナラ"
                                            })]
                                        })]
                                    })
                                })
                            }), (0, i.jsxs)("nav", {
                                className: "hidden items-center space-x-8 lg:flex",
                                children: [(0, i.jsx)(N(), {
                                    href: y.$.linkDextools,
                                    target: "_blank",
                                    children: (0, i.jsx)(h.$, {
                                        size: "sm",
                                        leftIcon: (0, i.jsx)(k.v$b, {
                                            className: "size-5"
                                        }),
                                        asChild: !0,
                                        children: "Live Chart"
                                    })
                                }), (0, i.jsx)(N(), {
                                    href: y.$.linkUniswap,
                                    target: "_blank",
                                    children: (0, i.jsxs)(h.$, {
                                        size: "sm",
                                        leftIcon: (0, i.jsx)(k.cEG, {
                                            className: "size-5"
                                        }),
                                        asChild: !0,
                                        children: ["Buy ", y.$.tokenName]
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col items-start gap-1",
                                    children: [(0, i.jsx)(g.E, {
                                        size: "sm",
                                        children: "Contract Address"
                                    }), (0, i.jsx)(g.E, {
                                        size: "xs",
                                        className: "text-zinc-500",
                                        children: "0x0000...000"
                                    })]
                                }), (0, i.jsx)(u.i, {
                                    displayText: "Copy CA",
                                    size: "sm",
                                    variant: "default",
                                    className: "text-sm font-semibold"
                                }), (0, i.jsx)("div", {
                                    className: "flex items-center space-x-4",
                                    children: P.map((e, a) => {
                                        let t = "function" == typeof e.logo;
                                        return (0, i.jsx)(n?.P?.div || "div", {
                                            whileHover: {
                                                scale: 1.1
                                            },
                                            whileTap: {
                                                scale: .95
                                            },
                                            children: (0, i.jsx)(N(), {
                                                href: e.href,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "hover:text-primary flex items-center justify-center text-white transition-colors duration-200",
                                                children: t ? (0, i.jsx)(e.logo, {
                                                    className: "h-7 w-7"
                                                }) : (0, i.jsx)(v.default, {
                                                    src: e.logo,
                                                    alt: "Social media link",
                                                    width: 28,
                                                    height: 28,
                                                    className: "object-cover brightness-0 invert filter"
                                                })
                                            })
                                        }, a)
                                    })
                                })]
                            }), (0, i.jsx)(n?.P?.button || "button", {
                                className: "hover:bg-muted cursor-pointer rounded-lg p-2 transition-colors duration-200 lg:hidden",
                                onClick: () => s(!t),
                                whileTap: {
                                    scale: .95
                                },
                                children: t ? (0, i.jsx)(b.A, {
                                    className: "h-6 w-6 text-white"
                                }) : (0, i.jsx)(w.A, {
                                    className: "h-6 w-6 text-white"
                                })
                            })]
                        }), (0, i.jsx)(f.N, {
                            children: t && (0, i.jsx)(n?.P?.div || "div", {
                                className: "overflow-hidden lg:hidden",
                                variants: {
                                    closed: {
                                        opacity: 0,
                                        height: 0
                                    },
                                    open: {
                                        opacity: 1,
                                        height: "auto"
                                    }
                                },
                                initial: "closed",
                                animate: "open",
                                exit: "closed",
                                transition: {
                                    duration: .3,
                                    ease: "easeInOut"
                                },
                                children: (0, i.jsxs)("div", {
                                    className: "mt-4 flex h-screen flex-col items-center justify-center gap-10 py-6",
                                    children: [(0, i.jsxs)("div", {
                                        className: "flex flex-col space-y-3 px-4",
                                        children: [(0, i.jsx)(N(), {
                                            href: y.$.linkDextools,
                                            target: "_blank",
                                            children: (0, i.jsx)(h.$, {
                                                leftIcon: (0, i.jsx)(k.v$b, {
                                                    className: "size-5"
                                                }),
                                                asChild: !0,
                                                className: "w-full justify-start",
                                                children: "Live Chart"
                                            })
                                        }), (0, i.jsx)(N(), {
                                            href: y.$.linkUniswap,
                                            target: "_blank",
                                            children: (0, i.jsxs)(h.$, {
                                                leftIcon: (0, i.jsx)(k.cEG, {
                                                    className: "size-5"
                                                }),
                                                asChild: !0,
                                                className: "w-full justify-start",
                                                children: ["Buy ", y.$.tokenName]
                                            })
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "px-4 pt-4",
                                        children: [(0, i.jsxs)("div", {
                                            className: "mb-4 flex flex-col items-start gap-1",
                                            children: [(0, i.jsx)(g.E, {
                                                size: "sm",
                                                children: "Contract Address"
                                            }), (0, i.jsx)(g.E, {
                                                size: "xs",
                                                className: "text-zinc-500",
                                                children: "0x0000...000"
                                            })]
                                        }), (0, i.jsx)(h.$, {
                                            leftIcon: (0, i.jsx)(k.zU_, {
                                                className: "size-5"
                                            }),
                                            onClick: () => {
                                                navigator.clipboard.writeText(y.$.hash)
                                            },
                                            className: "w-full justify-start",
                                            children: (0, i.jsx)(g.E, {
                                                className: "text-primary",
                                                weight: "semibold",
                                                children: "Copy"
                                            })
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "px-4 pt-4",
                                        children: [(0, i.jsx)(g.E, {
                                            size: "sm",
                                            className: "mb-3 pb-2 text-zinc-500",
                                            children: "Follow us"
                                        }), (0, i.jsx)("div", {
                                            className: "flex items-center space-x-4",
                                            children: P.map((e, a) => {
                                                let t = "function" == typeof e.logo;
                                                return (0, i.jsx)(n?.P?.div || "div", {
                                                    whileHover: {
                                                        scale: 1.1
                                                    },
                                                    whileTap: {
                                                        scale: .95
                                                    },
                                                    children: (0, i.jsx)(N(), {
                                                        href: e.href,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "hover:text-primary flex items-center justify-center text-white transition-colors duration-200",
                                                        onClick: () => s(!1),
                                                        children: t ? (0, i.jsx)(e.logo, {
                                                            className: "h-7 w-7"
                                                        }) : (0, i.jsx)(v.default, {
                                                            src: e.logo,
                                                            alt: "Social media link",
                                                            width: 28,
                                                            height: 28,
                                                            className: "object-cover brightness-0 invert filter"
                                                        })
                                                    })
                                                }, a)
                                            })
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                })
            }

            function A(e) {
                let {
                    className: a,
                    ...t
                } = e;
                return (0, i.jsx)("div", {
                    "data-slot": "card",
                    className: (0, r.cn)("flex max-w-[300px] min-w-[300px] flex-col items-center rounded-lg border border-zinc-700/50 bg-zinc-900 p-6 text-center text-white shadow-[0px_0px_10px_rgba(255,255,255,0.1)] transition-all duration-300 hover:border-zinc-600/70 hover:shadow-[0px_0px_15px_rgba(255,255,255,0.2)]", a),
                    ...t
                })
            }

            function C(e) {
                let {
                    className: a,
                    children: t,
                    ...s
                } = e;
                return (0, i.jsx)("div", {
                    "data-slot": "card-icon",
                    className: (0, r.cn)("mb-2 text-2xl", a),
                    ...s,
                    children: t
                })
            }

            function $(e) {
                let {
                    className: a,
                    ...t
                } = e;
                return (0, i.jsx)("div", {
                    "data-slot": "card-title",
                    className: (0, r.cn)("mb-2 font-semibold", a),
                    ...t
                })
            }

            function U(e) {
                let {
                    className: a,
                    ...t
                } = e;
                return (0, i.jsx)("div", {
                    "data-slot": "card-number",
                    className: (0, r.cn)("mb-1 text-xl font-bold text-orange-300", a),
                    ...t
                })
            }

            function E(e) {
                let {
                    className: a,
                    ...t
                } = e;
                return (0, i.jsx)("div", {
                    "data-slot": "card-description",
                    className: (0, r.cn)("mb-4 text-sm text-gray-300", a),
                    ...t
                })
            }

            function _(e) {
                let {
                    className: a,
                    children: t,
                    ...s
                } = e;
                return (0, i.jsx)("button", {
                    "data-slot": "card-follow",
                    className: (0, r.cn)("flex cursor-pointer items-center justify-center gap-1 text-sm text-white transition-colors group-hover:text-orange-300", a),
                    ...s,
                    children: t
                })
            }
            var T = t(3347);
            let O = [
                {

                }, {
                    label: "CMC",
                    href: y.$.linkCmc
                }, {
                    label: "Buy $NALA",
                    icon: (0, i.jsx)(k.cEG, {
                        className: "size-5"
                    }),
                    href: y.$.linkUniswap
                }, {
                    label: "$NALA X COMMUNITY",
                    icon: (0, i.jsx)(T.bBb, {
                        className: "size-5"
                    }),
                    variant: "primary",
                    href: y.$.linkTwitter
                },
                {
                    label: "KUCOIN",
                    icon: "/images/kucoin-logo.webp",
                    variant: "primary",
                    href: y.$.linkKucoin
                },
                {
                    label: "MEXC",
                    icon: "/images/mexc.webp",
                    href: y.$.linkMexc
                }, {
                    label: "LBANK",
                    icon: "/images/lbank.webp",
                    variant: "primary",
                    href: y.$.linkLbank
                }, {
                    label: "BITMART",
                    icon: "/images/bitmart.webp",
                    href: y.$.linkBitmart
                }, {
                    label: "XT",
                    icon: "/images/xt.webp",
                    variant: "primary",
                    href: y.$.linkXt
                }, {
                    label: "POLONIEX",
                    icon: "/images/poloniex.webp",
                    href: y.$.linkPoloniex
                }, {
                    label: "HOTCOIN",
                    icon: "/images/hotcoin.webp",
                    variant: "primary",
                    href: y.$.linkHotcoin
                }, {
                    label: "KCEX",
                    icon: "/images/kcex.webp",
                    href: y.$.linkKcex
                }, {
                    label: "BINGX",
                    icon: "/images/bingx-logo.webp",
                    variant: "primary",
                    href: y.$.linkBingx
                }, {
                    label: "BICONOMY",
                    icon: "/images/bit_logo.webp",
                    variant: "primary",
                    href: "https://www.biconomy.com/exchange/"
                }, {
                    label: "WEEX",
                    icon: "/images/logo_yellow.webp",
                    variant: "primary",
                    href: "https://www.weex.com/spot/"
                },
                {
                    label: "NALA FUN",
                    icon: "/images/logo.webp",
                    variant: "primary",
                    href: ""
                },
                {
                    label: "HUOBI",
                    icon: "/images/htx.webp",
                    href: "https://www.huobi.com/en-us/exchange/"
                }
            ];

            function I() {
                let e = (0, l.useRef)(null),
                    a = (0, s.W)(e, {
                        once: !0,
                        margin: "-10% 0px -10% 0px"
                    });
                return (0, i.jsxs)("section", {
                    id: "hero",
                    className: "relative flex min-h-screen w-full items-center overflow-hidden bg-zinc-900",
                    children: [(0, i.jsx)("div", {
                        className: "absolute inset-0 bg-[url('/images/background.webp')] bg-cover bg-center bg-no-repeat"
                    }), (0, i.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"
                    }), (0, i.jsx)("div", {
                        className: "absolute bottom-0 h-full w-full bg-gradient-to-t from-black via-transparent to-transparent"
                    }), (0, i.jsx)("div", {
                        className: "relative z-60 mx-auto w-full px-6 pt-30 text-center sm:pt-60 md:pt-80 lg:pt-100",
                        children: (0, i.jsxs)("div", {
                            className: "mx-auto grid max-w-350 grid-cols-1 gap-16 pb-10",
                            children: [(0, i.jsxs)("div", {
                                className: "flex flex-col gap-4",
                                children: [(0, i.jsx)(n?.P?.div || "div", {
                                    initial: {
                                        opacity: 0,
                                        y: 30,
                                        scale: .9
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    },
                                    transition: {
                                        duration: .8,
                                        delay: .2,
                                        ease: "easeOut"
                                    },
                                    children: (0, i.jsx)(g.E, {
                                        tag: "h1",
                                        size: "huge-6",
                                        weight: "bold",
                                        className: "font-musashi mb-4 text-8xl text-white drop-shadow-[0px_0px_10px_rgba(255,255,255,0.5)] sm:text-9xl lg:text-[300px]",
                                        children: "NALA"
                                    })
                                }), (0, i.jsx)(n?.P?.div || "div", {
                                    initial: {
                                        opacity: 0,
                                        y: 20,
                                        scale: .95
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    },
                                    transition: {
                                        duration: .6,
                                        delay: .4,
                                        ease: "easeOut"
                                    },
                                    children: (0, i.jsx)(g.E, {
                                        size: "huge-2",
                                        className: "text-xl md:text-2xl lg:text-3xl",
                                        children: "ナラ- Nala The worlds most famous cat "
                                    })
                                })]
                            }),


                            // (0, i.jsx)(n?.P?.div || "div", {
                            //     ref: e,
                            //     initial: {
                            //         opacity: 0,
                            //         y: 20
                            //     },
                            //     animate: a ? {
                            //         opacity: 1,
                            //         y: 0
                            //     } : {
                            //         opacity: 0,
                            //         y: 20
                            //     },
                            //     transition: {
                            //         duration: .8,
                            //         delay: .4
                            //     },
                            //     className: "flex flex-col items-center gap-6",
                            //     children: [(0, i.jsxs)("div", {
                            //         className: "flex w-full max-w-sm flex-col gap-3 min-[400px]:hidden",
                            //         children: [(0, i.jsxs)
                            //             ("div",
                            //                 {
                            //                     className: "flex gap-3",
                            //                     children: [(0, i.jsx)("a", {
                            //                         href: O[0].href,
                            //                         target: "_blank",
                            //                         rel: "noopener noreferrer",
                            //                         className: "flex-1",
                            //                         children: (0, i.jsx)(n?.P?.div || "div", {
                            //                             initial: {
                            //                                 opacity: 0,
                            //                                 y: 20,
                            //                                 scale: .8
                            //                             },
                            //                             animate: a ? {
                            //                                 opacity: 1,
                            //                                 y: 0,
                            //                                 scale: 1
                            //                             } : {
                            //                                 opacity: 0,
                            //                                 y: 20,
                            //                                 scale: .8
                            //                             },
                            //                             transition: {
                            //                                 duration: .5,
                            //                                 delay: .4,
                            //                                 ease: "easeOut"
                            //                             },


                            //                         }
                            //                         )
                            //                     }
                            //                     ),

                            //                     (0, i.jsx)("a", {
                            //                         href: O[1].href,
                            //                         target: "_blank",
                            //                         rel: "noopener noreferrer",
                            //                         className: "flex-1",
                            //                         children: (0, i.jsx)(n?.P?.div || "div", {
                            //                             initial: {
                            //                                 opacity: 0,
                            //                                 y: 20,
                            //                                 scale: .8
                            //                             },
                            //                             animate: a ? {
                            //                                 opacity: 1,
                            //                                 y: 0,
                            //                                 scale: 1
                            //                             } : {
                            //                                 opacity: 0,
                            //                                 y: 20,
                            //                                 scale: .8
                            //                             },
                            //                             transition: {
                            //                                 duration: .5,
                            //                                 delay: .5,
                            //                                 ease: "easeOut"
                            //                             },
                            //                             children: (0, i.jsx)(h.$, {
                            //                                 variant: O[1].variant,
                            //                                 className: "w-full",
                            //                                 asChild: !0,
                            //                                 children: O[1].label
                            //                             })
                            //                         })
                            //                     })]
                            //                 }),


                            //         (0, i.jsx)("a", {
                            //             href: O[2].href,
                            //             target: "_blank",
                            //             rel: "noopener noreferrer",
                            //             children: (0, i.jsx)(n?.P?.div || "div", {
                            //                 initial: {
                            //                     opacity: 0,
                            //                     y: 20,
                            //                     scale: .8
                            //                 },
                            //                 animate: a ? {
                            //                     opacity: 1,
                            //                     y: 0,
                            //                     scale: 1
                            //                 } : {
                            //                     opacity: 0,
                            //                     y: 20,
                            //                     scale: .8
                            //                 },
                            //                 transition: {
                            //                     duration: .5,
                            //                     delay: .6,
                            //                     ease: "easeOut"
                            //                 },
                            //                 children: (0, i.jsx)(h.$, {
                            //                     variant: O[2].variant,
                            //                     leftIcon: O[2].icon,
                            //                     className: "w-full",
                            //                     asChild: !0,
                            //                     children: O[2].label
                            //                 })
                            //             })
                            //         }), (0, i.jsx)("a", {
                            //             href: O[3].href,
                            //             target: "_blank",
                            //             rel: "noopener noreferrer",
                            //             children: (0, i.jsx)(n?.P?.div || "div", {
                            //                 initial: {
                            //                     opacity: 0,
                            //                     y: 20,
                            //                     scale: .8
                            //                 },
                            //                 animate: a ? {
                            //                     opacity: 1,
                            //                     y: 0,
                            //                     scale: 1
                            //                 } : {
                            //                     opacity: 0,
                            //                     y: 20,
                            //                     scale: .8
                            //                 },
                            //                 transition: {
                            //                     duration: .5,
                            //                     delay: .7,
                            //                     ease: "easeOut"
                            //                 },
                            //                 children: (0, i.jsx)(h.$, {
                            //                     variant: O[3].variant,
                            //                     rightIcon: O[3].icon,
                            //                     className: "w-full",
                            //                     asChild: !0,
                            //                     children: O[3].label
                            //                 })
                            //             })
                            //         }), (0, i.jsxs)("div", {
                            //             className: "flex gap-3",
                            //             children: [(0, i.jsx)("a", {
                            //                 href: O[4].href,
                            //                 target: "_blank",
                            //                 rel: "noopener noreferrer",
                            //                 className: "flex-1",
                            //                 children: (0, i.jsx)(n?.P?.div || "div", {
                            //                     initial: {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     animate: a ? {
                            //                         opacity: 1,
                            //                         y: 0,
                            //                         scale: 1
                            //                     } : {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     transition: {
                            //                         duration: .5,
                            //                         delay: .8,
                            //                         ease: "easeOut"
                            //                     },
                            //                     children: (0, i.jsx)(h.$, {
                            //                         variant: O[4].variant,
                            //                         rightIcon: O[4].icon,
                            //                         className: "w-full",
                            //                         asChild: !0,
                            //                         children: O[4].label
                            //                     })
                            //                 })
                            //             }), (0, i.jsx)("a", {
                            //                 href: O[5].href,
                            //                 target: "_blank",
                            //                 rel: "noopener noreferrer",
                            //                 className: "flex-1",
                            //                 children: (0, i.jsx)(n?.P?.div || "div", {
                            //                     initial: {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     animate: a ? {
                            //                         opacity: 1,
                            //                         y: 0,
                            //                         scale: 1
                            //                     } : {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     transition: {
                            //                         duration: .5,
                            //                         delay: .9,
                            //                         ease: "easeOut"
                            //                     },
                            //                     children: (0, i.jsx)(h.$, {
                            //                         variant: O[5].variant,
                            //                         rightIcon: O[5].icon,
                            //                         className: "w-full",
                            //                         asChild: !0,
                            //                         children: O[5].label
                            //                     })
                            //                 })
                            //             })]
                            //         }), (0, i.jsxs)("div", {
                            //             className: "flex gap-3",
                            //             children: [(0, i.jsx)("a", {
                            //                 href: O[6].href,
                            //                 target: "_blank",
                            //                 rel: "noopener noreferrer",
                            //                 className: "flex-1",
                            //                 children: (0, i.jsx)(n?.P?.div || "div", {
                            //                     initial: {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     animate: a ? {
                            //                         opacity: 1,
                            //                         y: 0,
                            //                         scale: 1
                            //                     } : {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     transition: {
                            //                         duration: .5,
                            //                         delay: 1,
                            //                         ease: "easeOut"
                            //                     },
                            //                     children: (0, i.jsx)(h.$, {
                            //                         variant: O[6].variant,
                            //                         rightIcon: O[6].icon,
                            //                         className: "w-full",
                            //                         asChild: !0,
                            //                         children: O[6].label
                            //                     })
                            //                 })
                            //             }), (0, i.jsx)("a", {
                            //                 href: O[7].href,
                            //                 target: "_blank",
                            //                 rel: "noopener noreferrer",
                            //                 className: "flex-1",
                            //                 children: (0, i.jsx)(n?.P?.div || "div", {
                            //                     initial: {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     animate: a ? {
                            //                         opacity: 1,
                            //                         y: 0,
                            //                         scale: 1
                            //                     } : {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     transition: {
                            //                         duration: .5,
                            //                         delay: 1.1,
                            //                         ease: "easeOut"
                            //                     },
                            //                     children: (0, i.jsx)(h.$, {
                            //                         variant: O[7].variant,
                            //                         rightIcon: O[7].icon,
                            //                         className: "w-full",
                            //                         asChild: !0,
                            //                         children: O[7].label
                            //                     })
                            //                 })
                            //             })]
                            //         }), (0, i.jsxs)("div", {
                            //             className: "flex gap-3",
                            //             children: [(0, i.jsx)("a", {
                            //                 href: O[8].href,
                            //                 target: "_blank",
                            //                 rel: "noopener noreferrer",
                            //                 className: "flex-1",
                            //                 children: (0, i.jsx)(n?.P?.div || "div", {
                            //                     initial: {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     animate: a ? {
                            //                         opacity: 1,
                            //                         y: 0,
                            //                         scale: 1
                            //                     } : {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     transition: {
                            //                         duration: .5,
                            //                         delay: 1.2,
                            //                         ease: "easeOut"
                            //                     },
                            //                     children: (0, i.jsx)(h.$, {
                            //                         variant: O[8].variant,
                            //                         rightIcon: O[8].icon,
                            //                         className: "w-full",
                            //                         asChild: !0,
                            //                         children: O[8].label
                            //                     })
                            //                 })
                            //             }), (0, i.jsx)("a", {
                            //                 href: O[9].href,
                            //                 target: "_blank",
                            //                 rel: "noopener noreferrer",
                            //                 className: "flex-1",
                            //                 children: (0, i.jsx)(n?.P?.div || "div", {
                            //                     initial: {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     animate: a ? {
                            //                         opacity: 1,
                            //                         y: 0,
                            //                         scale: 1
                            //                     } : {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     transition: {
                            //                         duration: .5,
                            //                         delay: 1.3,
                            //                         ease: "easeOut"
                            //                     },
                            //                     children: (0, i.jsx)(h.$, {
                            //                         variant: O[9].variant,
                            //                         rightIcon: O[9].icon,
                            //                         className: "w-full",
                            //                         asChild: !0,
                            //                         children: O[9].label
                            //                     })
                            //                 })
                            //             })]
                            //         }), (0, i.jsxs)("div", {
                            //             className: "flex gap-3",
                            //             children: [(0, i.jsx)("a", {
                            //                 href: O[10].href,
                            //                 target: "_blank",
                            //                 rel: "noopener noreferrer",
                            //                 className: "flex-1",
                            //                 children: (0, i.jsx)(n?.P?.div || "div", {
                            //                     initial: {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     animate: a ? {
                            //                         opacity: 1,
                            //                         y: 0,
                            //                         scale: 1
                            //                     } : {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     transition: {
                            //                         duration: .5,
                            //                         delay: 1.4,
                            //                         ease: "easeOut"
                            //                     },
                            //                     children: (0, i.jsx)(h.$, {
                            //                         variant: O[10].variant,
                            //                         rightIcon: O[10].icon,
                            //                         className: "w-full",
                            //                         asChild: !0,
                            //                         children: O[10].label
                            //                     })
                            //                 })
                            //             }), (0, i.jsx)("a", {
                            //                 href: O[11].href,
                            //                 target: "_blank",
                            //                 rel: "noopener noreferrer",
                            //                 className: "flex-1",
                            //                 children: (0, i.jsx)(n?.P?.div || "div", {
                            //                     initial: {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     animate: a ? {
                            //                         opacity: 1,
                            //                         y: 0,
                            //                         scale: 1
                            //                     } : {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     transition: {
                            //                         duration: .5,
                            //                         delay: 1.5,
                            //                         ease: "easeOut"
                            //                     },
                            //                     children: (0, i.jsx)(h.$, {
                            //                         variant: O[11].variant,
                            //                         rightIcon: O[11].icon,
                            //                         className: "w-full",
                            //                         asChild: !0,
                            //                         children: O[11].label
                            //                     })
                            //                 })
                            //             })]
                            //         }), (0, i.jsxs)("div", {
                            //             className: "flex gap-3",
                            //             children: [(0, i.jsx)("a", {
                            //                 href: O[12].href,
                            //                 target: "_blank",
                            //                 rel: "noopener noreferrer",
                            //                 className: "flex-1",
                            //                 children: (0, i.jsx)(n?.P?.div || "div", {
                            //                     initial: {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     animate: a ? {
                            //                         opacity: 1,
                            //                         y: 0,
                            //                         scale: 1
                            //                     } : {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     transition: {
                            //                         duration: .5,
                            //                         delay: 1.6,
                            //                         ease: "easeOut"
                            //                     },
                            //                     children: (0, i.jsx)(h.$, {
                            //                         variant: O[12].variant,
                            //                         rightIcon: O[12].icon,
                            //                         className: "w-full",
                            //                         asChild: !0,
                            //                         children: O[12].label
                            //                     })
                            //                 })
                            //             }), (0, i.jsx)("a", {
                            //                 href: O[13].href,
                            //                 target: "_blank",
                            //                 rel: "noopener noreferrer",
                            //                 className: "flex-1",
                            //                 children: (0, i.jsx)(n?.P?.div || "div", {
                            //                     initial: {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     animate: a ? {
                            //                         opacity: 1,
                            //                         y: 0,
                            //                         scale: 1
                            //                     } : {
                            //                         opacity: 0,
                            //                         y: 20,
                            //                         scale: .8
                            //                     },
                            //                     transition: {
                            //                         duration: .5,
                            //                         delay: 1.7,
                            //                         ease: "easeOut"
                            //                     },
                            //                     children: (0, i.jsx)(h.$, {
                            //                         variant: O[13].variant,
                            //                         rightIcon: O[13].icon,
                            //                         className: "w-full",
                            //                         asChild: !0,
                            //                         children: O[13].label
                            //                     })
                            //                 })
                            //             })]
                            //         }), (0, i.jsx)("a", {
                            //             href: O[14].href,
                            //             target: "_blank",
                            //             rel: "noopener noreferrer",
                            //             children: (0, i.jsx)(n?.P?.div || "div", {
                            //                 initial: {
                            //                     opacity: 0,
                            //                     y: 20,
                            //                     scale: .8
                            //                 },
                            //                 animate: a ? {
                            //                     opacity: 1,
                            //                     y: 0,
                            //                     scale: 1
                            //                 } : {
                            //                     opacity: 0,
                            //                     y: 20,
                            //                     scale: .8
                            //                 },
                            //                 transition: {
                            //                     duration: .5,
                            //                     delay: 1.8,
                            //                     ease: "easeOut"
                            //                 },
                            //                 children: (0, i.jsx)(h.$, {
                            //                     variant: O[14].variant,
                            //                     rightIcon: O[14].icon,
                            //                     className: "w-full",
                            //                     asChild: !0,
                            //                     children: O[14].label
                            //                 })
                            //             })
                            //         }), (0, i.jsx)("a", {
                            //             href: O[15].href,
                            //             target: "_blank",
                            //             rel: "noopener noreferrer",
                            //             children: (0, i.jsx)(n?.P?.div || "div", {
                            //                 initial: {
                            //                     opacity: 0,
                            //                     y: 20,
                            //                     scale: .8
                            //                 },
                            //                 animate: a ? {
                            //                     opacity: 1,
                            //                     y: 0,
                            //                     scale: 1
                            //                 } : {
                            //                     opacity: 0,
                            //                     y: 20,
                            //                     scale: .8
                            //                 },
                            //                 transition: {
                            //                     duration: .5,
                            //                     delay: 1.9,
                            //                     ease: "easeOut"
                            //                 },
                            //                 children: (0, i.jsx)(h.$, {
                            //                     variant: O[15].variant,
                            //                     rightIcon: O[15].icon,
                            //                     className: "w-full",
                            //                     asChild: !0,
                            //                     children: O[15].label
                            //                 })
                            //             })
                            //         }), (0, i.jsx)("a", {
                            //             href: O[16].href,
                            //             target: "_blank",
                            //             rel: "noopener noreferrer",
                            //             children: (0, i.jsx)(n?.P?.div || "div", {
                            //                 initial: {
                            //                     opacity: 0,
                            //                     y: 20,
                            //                     scale: .8
                            //                 },
                            //                 animate: a ? {
                            //                     opacity: 1,
                            //                     y: 0,
                            //                     scale: 1
                            //                 } : {
                            //                     opacity: 0,
                            //                     y: 20,
                            //                     scale: .8
                            //                 },
                            //                 transition: {
                            //                     duration: .5,
                            //                     delay: 2,
                            //                     ease: "easeOut"
                            //                 },
                            //                 children: (0, i.jsx)(h.$, {
                            //                     variant: O[16].variant,
                            //                     rightIcon: O[16].icon,
                            //                     className: "w-full",
                            //                     asChild: !0,
                            //                     children: O[16].label
                            //                 })
                            //             })
                            //         })]
                            //     }), (0, i.jsx)("div", {
                            //         className: "hidden flex-wrap justify-center gap-3 min-[400px]:flex",
                            //         children: O.slice(0, 4).map((e, t) => (0, i.jsx)("a", {
                            //             href: e.href,
                            //             target: "_blank",
                            //             rel: "noopener noreferrer",
                            //             children: (0, i.jsx)(n?.P?.div || "div", {
                            //                 initial: {
                            //                     opacity: 0,
                            //                     y: 20,
                            //                     scale: .8
                            //                 },
                            //                 animate: a ? {
                            //                     opacity: 1,
                            //                     y: 0,
                            //                     scale: 1
                            //                 } : {
                            //                     opacity: 0,
                            //                     y: 20,
                            //                     scale: .8
                            //                 },
                            //                 transition: {
                            //                     duration: .5,
                            //                     delay: .4 + .1 * t,
                            //                     ease: "easeOut"
                            //                 },
                            //                 children: (0, i.jsx)(h.$, {
                            //                     variant: e.variant,
                            //                     leftIcon: e.icon,
                            //                     className: "w-fit",
                            //                     asChild: !0,
                            //                     children: e.label
                            //                 })
                            //             })
                            //         }, t))
                            //     }), (0, i.jsx)("div", {
                            //         className: "hidden flex-wrap justify-center gap-3 min-[400px]:flex",
                            //         children: O.slice(4, 10).map((e, t) => (0, i.jsx)("a", {
                            //             href: e.href,
                            //             target: "_blank",
                            //             rel: "noopener noreferrer",
                            //             children: (0, i.jsx)(n?.P?.div || "div", {
                            //                 initial: {
                            //                     opacity: 0,
                            //                     y: 20,
                            //                     scale: .8
                            //                 },
                            //                 animate: a ? {
                            //                     opacity: 1,
                            //                     y: 0,
                            //                     scale: 1
                            //                 } : {
                            //                     opacity: 0,
                            //                     y: 20,
                            //                     scale: .8
                            //                 },
                            //                 transition: {
                            //                     duration: .5,
                            //                     delay: .6 + .1 * t,
                            //                     ease: "easeOut"
                            //                 },
                            //                 children: (0, i.jsx)(h.$, {
                            //                     variant: e.variant,
                            //                     rightIcon: e.icon,
                            //                     className: "w-fit",
                            //                     asChild: !0,
                            //                     children: e.label
                            //                 })
                            //             })
                            //         }, t + 4))
                            //     }), (0, i.jsx)("div", {
                            //         className: "hidden flex-wrap justify-center gap-3 min-[400px]:flex",
                            //         children: O.slice(10).map((e, t) => (0, i.jsx)("a", {
                            //             href: e.href,
                            //             target: "_blank",
                            //             rel: "noopener noreferrer",
                            //             children: (0, i.jsx)(n?.P?.div || "div", {
                            //                 initial: {
                            //                     opacity: 0,
                            //                     y: 20,
                            //                     scale: .8
                            //                 },
                            //                 animate: a ? {
                            //                     opacity: 1,
                            //                     y: 0,
                            //                     scale: 1
                            //                 } : {
                            //                     opacity: 0,
                            //                     y: 20,
                            //                     scale: .8
                            //                 },
                            //                 transition: {
                            //                     duration: .5,
                            //                     delay: .8 + .1 * t,
                            //                     ease: "easeOut"
                            //                 },
                            //                 children: (0, i.jsx)(h.$, {
                            //                     variant: e.variant,
                            //                     rightIcon: e.icon,
                            //                     className: "w-fit",
                            //                     asChild: !0,
                            //                     children: e.label
                            //                 })
                            //             })
                            //         }, t + 10))
                            //     })]
                            // }), 
                            (0, i.jsx)(n?.P?.div || "div", {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: a ? {
                                    opacity: 1,
                                    y: 0
                                } : {
                                    opacity: 0,
                                    y: 30
                                },
                                transition: {
                                    duration: .8,
                                    delay: .8
                                },
                                className: "flex flex-wrap justify-center gap-10",
                                children: [(0, i.jsx)(n?.P?.div || "div", {
                                    initial: {
                                        opacity: 0,
                                        y: 30,
                                        scale: .9
                                    },
                                    animate: a ? {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    } : {
                                        opacity: 0,
                                        y: 30,
                                        scale: .9
                                    },
                                    transition: {
                                        duration: .6,
                                        delay: .8,
                                        ease: "easeOut"
                                    },
                                    children: (0, i.jsx)(N(), {
                                        href: "https://www.tiktok.com/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "group block",
                                        children: (0, i.jsxs)(A, {
                                            children: [(0, i.jsx)(C, {
                                                children: (0, i.jsx)(k.kkU, {
                                                    className: "size-10"
                                                })
                                            }), (0, i.jsx)($, {
                                                children: (0, i.jsx)(g.E, {
                                                    tag: "h3",
                                                    size: "huge-3",
                                                    className: "font-musashi",
                                                    children: "TikTok"
                                                })
                                            }), (0, i.jsx)(U, {
                                                children: "236k+"
                                            }), (0, i.jsx)(E, {
                                                children: (0, i.jsx)(g.E, {
                                                    size: "sm",
                                                    children: "Viral Cat"
                                                })
                                            }), (0, i.jsx)(_, {
                                                children: "Follow ↗"
                                            })]
                                        })
                                    })
                                }), (0, i.jsx)(n?.P?.div || "div", {
                                    initial: {
                                        opacity: 0,
                                        y: 30,
                                        scale: .9
                                    },
                                    animate: a ? {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    } : {
                                        opacity: 0,
                                        y: 30,
                                        scale: .9
                                    },
                                    transition: {
                                        duration: .6,
                                        delay: .8 + .15,
                                        ease: "easeOut"
                                    },
                                    children: (0, i.jsx)(N(), {
                                        href: "https://www.instagram.com/nala_cat/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "group block",
                                        children: (0, i.jsxs)(A, {
                                            children: [(0, i.jsx)(C, {
                                                children: (0, i.jsx)(k.ao$, {
                                                    className: "size-10"
                                                })
                                            }), (0, i.jsx)($, {
                                                children: (0, i.jsx)(g.E, {
                                                    tag: "h3",
                                                    size: "huge-3",
                                                    className: "font-musashi",
                                                    children: "Instagram"
                                                })
                                            }), (0, i.jsx)(U, {
                                                children: "4.4m+"
                                            }), (0, i.jsx)(E, {
                                                children: (0, i.jsx)(g.E, {
                                                    size: "sm",
                                                    children: "Guinness World Record Holder"
                                                })
                                            }), (0, i.jsxs)(_, {
                                                children: ["Follow ", (0, i.jsx)(T.bBb, {
                                                    className: "size-5"
                                                })]
                                            })]
                                        })
                                    })
                                }), (0, i.jsx)(n?.P?.div || "div", {
                                    initial: {
                                        opacity: 0,
                                        y: 30,
                                        scale: .9
                                    },
                                    animate: a ? {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    } : {
                                        opacity: 0,
                                        y: 30,
                                        scale: .9
                                    },
                                    transition: {
                                        duration: .6,
                                        delay: 1.1,
                                        ease: "easeOut"
                                    },
                                    children: (0, i.jsx)(N(), {
                                        href: "https://www.youtube.com/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "group block",
                                        children: (0, i.jsxs)(A, {
                                            children: [(0, i.jsx)(C, {
                                                children: (0, i.jsx)(k.Vk6, {
                                                    className: "size-10"
                                                })
                                            }), (0, i.jsx)($, {
                                                children: (0, i.jsx)(g.E, {
                                                    tag: "h3",
                                                    size: "huge-3",
                                                    className: "font-musashi",
                                                    children: "YouTube"
                                                })
                                            }), (0, i.jsx)(U, {
                                                children: "28k"
                                            }), (0, i.jsx)(E, {
                                                children: (0, i.jsx)(g.E, {
                                                    size: "sm",
                                                    children: "The Viral cat"
                                                })
                                            }), (0, i.jsxs)(_, {
                                                children: ["Follow ", (0, i.jsx)(T.bBb, {
                                                    className: "size-5"
                                                })]
                                            })]
                                        })
                                    })
                                })]
                            })]
                        })
                    })]
                })
            }
            let Y = {
                hidden: {
                    opacity: 0,
                    y: 40,
                    scale: .96
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: .7,
                        ease: (0, t(2483).A)(.42, 0, .58, 1)
                    }
                }
            };
            var S = t(8093);

            function F() {
                let e = (0, l.useRef)(null),
                    a = (0, s.W)(e, {
                        once: !0,
                        margin: "-10% 0px -10% 0px"
                    });
                return (0, i.jsx)("section", {
                    id: "join-community",
                    className: "relative flex min-h-[600px] w-full items-center justify-center overflow-hidden bg-black py-20",
                    children: (0, i.jsx)(n?.P?.div || "div", {
                        ref: e,
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: a ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: .8,
                            ease: [.42, 0, .58, 1]
                        },
                        className: "relative z-20 w-full max-w-7xl px-6 lg:px-12",
                        children: (0, i.jsxs)("div", {
                            className: "flex flex-col gap-12",
                            children: [(0, i.jsxs)("div", {
                                className: "flex flex-col justify-center gap-12 lg:grid lg:grid-cols-2 lg:items-center",
                                children: [(0, i.jsx)(n?.P?.div || "div", {
                                    initial: {
                                        opacity: 0,
                                        x: -40
                                    },
                                    animate: a ? {
                                        opacity: 1,
                                        x: 0
                                    } : {},
                                    transition: {
                                        duration: .8,
                                        delay: .2,
                                        ease: [.42, 0, .58, 1]
                                    },
                                    className: "flex flex-col items-center justify-center gap-8 lg:items-start lg:justify-start",
                                    children: [(0, i.jsx)(m, {
                                        as: "h2",
                                        className: "text-center text-4xl leading-tight text-white md:text-5xl lg:text-6xl",
                                        children: "NALA X Community"
                                    }), (0, i.jsx)(g.E, {
                                        size: "lg",
                                        className: "text-center leading-relaxed",
                                        children: "Share stories, discuss $NALA, and celebrate CAT heritage"
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-wrap justify-center gap-8 md:justify-start",
                                        children: [(0, i.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [(0, i.jsx)("div", {
                                                className: "flex size-10 items-center justify-center rounded-full bg-white",
                                                children: (0, i.jsx)(S.ccC, {
                                                    className: "size-5 text-black"
                                                })
                                            }), (0, i.jsx)(g.E, {
                                                children: "Active Members"
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [(0, i.jsx)("div", {
                                                className: "flex size-10 items-center justify-center rounded-full bg-white",
                                                children: (0, i.jsx)(M.vPW, {
                                                    className: "size-5 text-black"
                                                })
                                            }), (0, i.jsx)(g.E, {
                                                children: "Daily Discussions"
                                            })]
                                        })]
                                    }), (0, i.jsx)(n?.P?.div || "div", {
                                        initial: "hidden",
                                        animate: a ? "visible" : "hidden",
                                        variants: Y,
                                        children: (0, i.jsx)(N(), {
                                            href: y.$.linkTelegram,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: (0, i.jsx)(h.$, {
                                                asChild: !0,
                                                variant: "default",
                                                size: "sm",
                                                rightIcon: (0, i.jsx)(k.EQc, {}),
                                                children: "Join X Community"
                                            })
                                        })
                                    })]
                                }), (0, i.jsx)(n?.P?.div || "div", {
                                    initial: {
                                        opacity: 0,
                                        x: 40
                                    },
                                    animate: a ? {
                                        opacity: 1,
                                        x: 0
                                    } : {},
                                    transition: {
                                        duration: .8,
                                        delay: .4,
                                        ease: [.42, 0, .58, 1]
                                    },
                                    className: "flex justify-center lg:justify-end",
                                    children: (0, i.jsx)("div", {
                                        className: "relative w-full max-w-[550px]",
                                        children: (0, i.jsx)("div", {
                                            className: "relative overflow-hidden rounded-3xl drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]",
                                            children: (0, i.jsx)(v.default, {
                                                src: "/images/join-community.webp",
                                                alt: "NALA Community - Viral Cats",
                                                width: 400,
                                                height: 600,
                                                className: "h-auto w-full object-cover",
                                                priority: !0
                                            })
                                        })
                                    })
                                })]
                            }), (0, i.jsx)("div", {
                                className: "flex justify-center",
                                children: (0, i.jsx)(g.E, {
                                    size: "sm",
                                    className: "text-center",
                                    children: "Be part of the movement of Little NALA heritage and building the future with $NALA"
                                })
                            })]
                        })
                    })
                })
            }

            function B() {
                let e = (0, l.useRef)(null),
                    a = (0, s.W)(e, {
                        once: !0,
                        margin: "-10% 0px -10% 0px"
                    });
                return (0, i.jsxs)("section", {
                    // id: "manyu-fun",
                    // className: "relative flex min-h-[600px] w-full items-center justify-center overflow-hidden bg-white py-20",
                    // style: {
                    //     backgroundImage: "\n          linear-gradient(rgba(107, 114, 128, 0.2) 1px, transparent 1px),\n          linear-gradient(90deg, rgba(107, 114, 128, 0.1) 1px, transparent 1px),\n          linear-gradient(45deg, rgba(75, 85, 99, 0.1) 1px, transparent 1px),\n          linear-gradient(-45deg, rgba(75, 85, 99, 0.1) 1px, transparent 1px)\n        ",
                    //     backgroundSize: "60px 60px, 60px 60px, 30px 30px, 30px 30px",
                    //     backgroundPosition: "0 0, 0 0, 0 0, 0 0"
                    // },
                    // children: [(0, i.jsxs)("div", {
                    //     className: "pointer-events-none absolute inset-0 z-10",
                    //     children: [(0, i.jsx)("div", {
                    //         className: "absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent"
                    //     }), (0, i.jsx)("div", {
                    //         className: "absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent"
                    //     }), (0, i.jsx)("div", {
                    //         className: "absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent"
                    //     }), (0, i.jsx)("div", {
                    //         className: "absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent"
                    //     })]
                    // }), (0, i.jsx)(n?.P?.div || "div", {
                    //     ref: e,
                    //     initial: {
                    //         opacity: 0,
                    //         y: 40
                    //     },
                    //     animate: a ? {
                    //         opacity: 1,
                    //         y: 0
                    //     } : {},
                    //     transition: {
                    //         duration: .8,
                    //         ease: [.42, 0, .58, 1]
                    //     },
                    //     className: "relative z-20 w-full max-w-7xl px-6 lg:px-12",
                    //     children: (0, i.jsx)("div", {
                    //         className: "flex flex-col items-center justify-center gap-12 text-center",
                    //         children: (0, i.jsx)(n?.P?.div || "div", {
                    //             initial: {
                    //                 opacity: 0,
                    //                 y: 20
                    //             },
                    //             animate: a ? {
                    //                 opacity: 1,
                    //                 y: 0
                    //             } : {},
                    //             transition: {
                    //                 duration: .8,
                    //                 delay: .2,
                    //                 ease: [.42, 0, .58, 1]
                    //             },
                    //             className: "flex flex-col items-center gap-8",
                    //             children: [(0, i.jsx)(n?.P?.div || "div", {
                    //                 initial: {
                    //                     opacity: 0,
                    //                     y: 20
                    //                 },
                    //                 animate: a ? {
                    //                     opacity: 1,
                    //                     y: 0
                    //                 } : {},
                    //                 transition: {
                    //                     duration: .8,
                    //                     delay: .1,
                    //                     ease: [.42, 0, .58, 1]
                    //                 },
                    //                 className: "flex items-center gap-4",
                    //                 children: [(0, i.jsx)(m, {
                    //                     as: "h2",
                    //                     className: "text-4xl leading-tight text-zinc-950 md:text-5xl lg:text-6xl",
                    //                     children: "Manyu Fun"
                    //                 }), (0, i.jsx)(v.default, {
                    //                     src: "/images/logo.webp",
                    //                     alt: "Manyu Logo",
                    //                     width: 60,
                    //                     height: 60,
                    //                     className: "h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20"
                    //                 })]
                    //             }), (0, i.jsx)(n?.P?.p || "p", {
                    //                 initial: {
                    //                     opacity: 0,
                    //                     y: 20
                    //                 },
                    //                 animate: a ? {
                    //                     opacity: 1,
                    //                     y: 0
                    //                 } : {},
                    //                 transition: {
                    //                     duration: .7,
                    //                     ease: [.42, 0, .58, 1]
                    //                 },
                    //                 className: "mb-8 max-w-4xl text-justify text-lg text-zinc-700 md:text-2xl",
                    //                 children: "Deploy your memes on ethereum with a few clicks by using manyu fun"
                    //             }), (0, i.jsx)(n?.P?.div || "div", {
                    //                 initial: {
                    //                     opacity: 0,
                    //                     y: 20
                    //                 },
                    //                 animate: a ? {
                    //                     opacity: 1,
                    //                     y: 0
                    //                 } : {},
                    //                 transition: {
                    //                     duration: .8,
                    //                     delay: .4,
                    //                     ease: [.42, 0, .58, 1]
                    //                 },
                    //                 className: "relative w-full max-w-[1100px]",
                    //                 children: (0, i.jsx)("div", {
                    //                     className: "relative overflow-hidden rounded-xl drop-shadow-[0_0_20px_rgba(0,0,0,0.1)]",
                    //                     children: (0, i.jsx)(v.default, {
                    //                         src: "/images/manyu.webp",
                    //                         alt: "Manyu Fun - Deploy your memes on ethereum",
                    //                         width: 1100,
                    //                         height: 733,
                    //                         className: "h-auto w-full object-cover",
                    //                         priority: !0
                    //                     })
                    //                 })
                    //             }), (0, i.jsx)(n?.P?.div || "div", {
                    //                 initial: "hidden",
                    //                 animate: a ? "visible" : "hidden",
                    //                 variants: Y,
                    //                 children: (0, i.jsx)(N(), {
                    //                     href: "https://manyu.fun",
                    //                     target: "_blank",
                    //                     rel: "noopener noreferrer",
                    //                     children: (0, i.jsx)(h.$, {
                    //                         asChild: !0,
                    //                         variant: "primary",
                    //                         size: "default",
                    //                         rightIcon: (0, i.jsx)(k.EQc, {}),
                    //                         children: "Go to Manyu Fun"
                    //                     })
                    //                 })
                    //             })]
                    //         })
                    //     })
                    // })]
                })
            }
            var L = t(6440);

            function D(e) {
                // let {
                //     images: a,
                //     className: t,
                //     speed: s = 40,
                //     direction: l = "left",
                //     pauseOnHover: o = !0
                // } = e;
                // return (0, i.jsx)(n?.P?.div || "div", {
                //     className: (0, r.cn)("w-full py-4 bg-background", t),
                //     initial: {
                //         opacity: 0
                //     },
                //     animate: {
                //         opacity: 1
                //     },
                //     transition: {
                //         duration: 1,
                //         ease: "easeOut",
                //         staggerChildren: .2
                //     },
                //     children: (0, i.jsx)(L.A, {
                //         speed: s,
                //         direction: l,
                //         pauseOnHover: o,
                //         gradient: !1,
                //         children: a.map((e, a) => (0, i.jsx)("div", {
                //             className: "mx-4 flex-shrink-0",
                //             children: (0, i.jsx)(v.default, {
                //                 src: e,
                //                 alt: "Marquee image ".concat(a + 1),
                //                 width: 200,
                //                 height: 200,
                //                 className: "rounded-lg object-cover"
                //             })
                //         }, a))
                //     })
                // })
            }

            function R() {
                return (0, i.jsx)(D, {
                    // images: ["/images/manyu-pfp.webp", "/images/manyu-pfp1.webp", "/images/manyu-pfp2.webp", "/images/manyu-pfp3.webp", "/images/manyu-pfp4.webp", "/images/manyu-pfp5.webp", "/images/manyu-pfp6.webp", "/images/manyu-pfp7.webp", "/images/manyu-pfp8.webp", "/images/manyu-pfp9.webp", "/images/manyu-pfp10.webp", "/images/manyu-pfp11.webp", "/images/manyu-pfp12.webp", "/images/manyu-pfp13.webp", "/images/manyu-pfp14.webp", "/images/manyu-pfp15.webp", "/images/manyu-pfp16.webp", "/images/manyu-pfp17.webp", "/images/manyu-pfp18.webp", "/images/manyu-pfp19.webp", "/images/manyu-pfp20.webp", "/images/manyu-pfp21.webp", "/images/manyu-pfp22.webp", "/images/manyu-pfp23.webp", "/images/manyu-pfp24.webp", "/images/manyu-pfp25.webp", "/images/manyu-pfp26.webp", "/images/manyu-pfp27.webp", "/images/manyu-pfp28.webp", "/images/manyu-pfp29.webp", "/images/manyu-pfp30.webp", "/images/manyu-pfp31.webp", "/images/manyu-pfp32.webp", "/images/manyu-pfp33.webp", "/images/manyu-pfp34.webp", "/images/manyu-pfp35.webp", "/images/manyu-pfp36.webp", "/images/manyu-pfp37.webp", "/images/manyu-pfp38.webp", "/images/manyu-pfp39.webp"]
                })
            }

            function W() {
                let e = (0, l.useRef)(null),
                    a = (0, s.W)(e, {
                        once: !0,
                        margin: "-10% 0px -10% 0px"
                    });
                return (0, i.jsx)("section", {
                    // id: "manyu-profiles",
                    // className: "relative flex w-full flex-col items-center justify-center overflow-hidden bg-white py-30 text-center",
                    // children: (0, i.jsx)(n?.P?.div || "div", {
                    //     ref: e,
                    //     initial: {
                    //         opacity: 0,
                    //         y: 40
                    //     },
                    //     animate: a ? {
                    //         opacity: 1,
                    //         y: 0
                    //     } : {},
                    //     transition: {
                    //         duration: .8,
                    //         ease: [.42, 0, .58, 1]
                    //     },
                    //     className: "flex w-full flex-col items-center",
                    //     children: [(0, i.jsx)(m, {
                    //         as: "h2",
                    //         className: "font-extrasemibold mb-[25px] px-4 text-3xl text-zinc-950 md:text-4xl lg:text-5xl",
                    //         children: "Generate your Manyu personality!"
                    //     }), (0, i.jsx)(R, {}), (0, i.jsx)(n?.P?.div || "div", {
                    //         initial: {
                    //             opacity: 0,
                    //             y: 30,
                    //             scale: .95
                    //         },
                    //         animate: a ? {
                    //             opacity: 1,
                    //             y: 0,
                    //             scale: 1
                    //         } : {},
                    //         transition: {
                    //             duration: .8,
                    //             delay: .3,
                    //             ease: [.42, 0, .58, 1]
                    //         },
                    //         className: "mt-[25px] mb-[15px] w-full max-w-[550px] px-4",
                    //         children: (0, i.jsx)("div", {
                    //             className: "bg-background box-shadow-lg rounded-2xl p-6",
                    //             children: (0, i.jsx)(n?.P?.div || "div", {
                    //                 initial: {
                    //                     opacity: 0,
                    //                     x: 0
                    //                 },
                    //                 animate: a ? {
                    //                     opacity: 1,
                    //                     x: 0
                    //                 } : {},
                    //                 transition: {
                    //                     duration: .7,
                    //                     delay: .5,
                    //                     ease: [.42, 0, .58, 1]
                    //                 },
                    //                 className: "relative overflow-hidden rounded-lg shadow-lg",
                    //                 children: (0, i.jsx)(v.default, {
                    //                     src: "/images/pfp-gifs.webp",
                    //                     alt: "Manyu Community - Shiba Inu dogs",
                    //                     width: 400,
                    //                     height: 600,
                    //                     className: "h-auto w-full object-cover",
                    //                     priority: !0
                    //                 })
                    //             })
                    //         })
                    //     }), (0, i.jsx)(n?.P?.div || "div", {
                    //         initial: {
                    //             opacity: 0,
                    //             y: 30,
                    //             scale: .95
                    //         },
                    //         animate: a ? {
                    //             opacity: 1,
                    //             y: 0,
                    //             scale: 1
                    //         } : {},
                    //         transition: {
                    //             duration: .8,
                    //             delay: .3,
                    //             ease: [.42, 0, .58, 1]
                    //         },
                    //         className: "mt-4 px-4",
                    //         children: (0, i.jsx)(h.$, {
                    //             size: "sm",
                    //             variant: "primary",
                    //             leftIcon: (0, i.jsx)(k.EQc, {}),
                    //             asChild: !0,
                    //             children: (0, i.jsx)(N(), {
                    //                 href: "https://profile.manyushiba.com/",
                    //                 target: "_blank",
                    //                 children: "Generate"
                    //             })
                    //         })
                    //     })]
                    // })
                })
            }

            function q(e) {
                let {
                    images: a,
                    className: t,
                    speed: s = 50,
                    direction: n = "left",
                    pauseOnHover: l = !0
                } = e;
                return (0, i.jsx)("div", {
                    className: (0, r.cn)("w-full py-10", t),
                    children: (0, i.jsx)(L.A, {
                        speed: s,
                        direction: n,
                        pauseOnHover: l,
                        gradient: !1,
                        children: a.map((e, a) => (0, i.jsx)("div", {
                            className: "mx-4 flex-shrink-0",
                            children: (0, i.jsx)(v.default, {
                                src: e,
                                alt: "Marquee image ".concat(a + 1),
                                width: 150,
                                height: 150,
                                className: "rounded-lg object-cover"
                            })
                        }, a))
                    })
                })
            }

            function X() {
                return (0, i.jsx)(q, {
                    images: ["/images/manyu1.webp", "/images/manyu2.webp", "/images/manyu3.webp", "/images/manyu4.webp", "/images/manyu5.webp", "/images/manyu6.webp", "/images/manyu7.webp", "/images/manyu8.webp", "/images/manyu9.webp", "/images/manyu10.webp", "/images/manyu11.webp", "/images/manyu12.webp", "/images/manyu13.webp", "/images/manyu14.webp", "/images/manyu15.webp", "/images/manyu16.webp", "/images/manyu17.webp", "/images/manyu18.webp", "/images/manyu19.webp", "/images/manyu20.webp", "/images/manyu21.webp", "/images/manyu22.webp", "/images/manyu23.webp", "/images/manyu24.webp", "/images/manyu25.webp", "/images/manyu26.webp", "/images/manyu27.webp", "/images/manyu28.webp", "/images/manyu29.webp", "/images/manyu30.webp", "/images/manyu31.webp", "/images/manyu32.webp", "/images/manyu33.webp", "/images/manyu34.webp", "/images/manyu35.webp", "/images/manyu36.webp", "/images/manyu37.webp", "/images/manyu38.webp", "/images/manyu39.webp", "/images/manyu40.webp"]
                })
            }
            var G = t(2057);

            function Q(e) {
                let {
                    value: a,
                    label: t,
                    suffix: o = "+",
                    className: c,
                    delay: d = 0
                } = e, m = (0, l.useRef)(null), p = (0, s.W)(m, {
                    once: !0,
                    margin: "-10% 0px -10% 0px"
                });
                return (0, i.jsx)(n?.P?.div || "div", {
                    ref: m,
                    initial: {
                        opacity: 0,
                        y: 30,
                        scale: .9
                    },
                    animate: p ? {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    } : {
                        opacity: 0,
                        y: 30,
                        scale: .9
                    },
                    transition: {
                        duration: .6,
                        delay: d,
                        ease: "easeOut"
                    },
                    className: (0, r.cn)("max-w-[300px] min-w-[200px] rounded-lg bg-zinc-800 p-6 text-center", c),
                    children: [(0, i.jsxs)("div", {
                        className: "mb-2 text-4xl font-bold text-orange-400",
                        children: [p && (0, i.jsx)(G.Ay, {
                            end: a,
                            duration: 2,
                            delay: d + .2,
                            separator: ","
                        }), o]
                    }), (0, i.jsx)("div", {
                        className: "text-sm font-medium text-white",
                        children: t
                    })]
                })
            }

            function H() {
                let e = (0, l.useRef)(null),
                    a = (0, s.W)(e, {
                        once: !0,
                        margin: "-10% 0px -10% 0px"
                    });
                return (0, i.jsxs)("section", {
                    id: "kpi-metrics",
                    className: "w-full bg-white text-center",
                    children: [(0, i.jsxs)("div", {
                        ref: e,
                        className: "flex flex-col items-center justify-center gap-6 py-10 md:flex-row",
                        children: [(0, i.jsxs)("div", {
                            className: "flex items-start gap-2",
                            children: [(0, i.jsx)(n?.P?.div || "div", {
                                className: "flex flex-col items-start gap-2",
                                initial: {
                                    opacity: 0,
                                    y: 20,
                                    scale: .95
                                },
                                animate: a ? {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1
                                } : {
                                    opacity: 0,
                                    y: 20,
                                    scale: .95
                                },
                                transition: {
                                    duration: .6,
                                    delay: .1,
                                    ease: "easeOut"
                                },
                                children: [(0, i.jsx)(g.E, {
                                    size: "sm",
                                    weight: "semibold",
                                    className: "text-background",
                                    children: "Contract Address"
                                }), (0, i.jsx)(g.E, {
                                    size: "xs",
                                    className: "text-zinc-500",
                                    children: "0x000...00000"
                                })]
                            }), (0, i.jsx)(n?.P?.div || "div", {
                                initial: {
                                    opacity: 0,
                                    y: 20,
                                    scale: .95
                                },
                                animate: a ? {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1
                                } : {
                                    opacity: 0,
                                    y: 20,
                                    scale: .95
                                },
                                transition: {
                                    duration: .6,
                                    delay: .3,
                                    ease: "easeOut"
                                },
                                children: (0, i.jsx)(u.i, {
                                    displayText: "Copy CA",
                                    variant: "primary",
                                    className: "text-sm"
                                })
                            })]
                        }), (0, i.jsx)(n?.P?.span || "span", {
                            className: "bg-background/50 hidden h-16 w-px md:block",
                            initial: {
                                opacity: 0,
                                scaleY: 0
                            },
                            animate: a ? {
                                opacity: 1,
                                scaleY: 1
                            } : {
                                opacity: 0,
                                scaleY: 0
                            },
                            transition: {
                                duration: .6,
                                delay: .5,
                                ease: "easeOut"
                            }
                        }), (0, i.jsx)(n?.P?.div || "div", {
                            className: "flex items-center gap-2",
                            initial: {
                                opacity: 0,
                                y: 20,
                                scale: .95
                            },
                            animate: a ? {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            } : {
                                opacity: 0,
                                y: 20,
                                scale: .95
                            },
                            transition: {
                                duration: .6,
                                delay: .7,
                                ease: "easeOut"
                            },
                            children: (0, i.jsx)(h.$, {
                                size: "sm",
                                variant: "primary",
                                leftIcon: (0, i.jsx)(k.cEG, {
                                    className: "size-5"
                                }),
                                asChild: !0,
                                children: (0, i.jsxs)(N(), {
                                    href: y.$.linkUniswap,
                                    target: "_blank",
                                    children: ["Buy ", y.$.tokenName]
                                })
                            })
                        })]
                    }), (0, i.jsx)("div", {
                        className: "bg-background",
                        children: (0, i.jsx)(X, {})
                    }), (0, i.jsxs)("div", {
                        className: "flex flex-wrap items-center justify-center gap-8 py-20",
                        children: [(0, i.jsx)(Q, {
                            value: 5,
                            label: "Total Followers",
                            suffix: "M+",
                            delay: 0
                        }), (0, i.jsx)(Q, {
                            value: 25,
                            label: "Video Views",
                            suffix: "M+",
                            delay: .2
                        })]
                    })]
                })
            }
            let K = [{
                name: "Xander",
                profileImage: "/images/xander.webp",
                twitterUrl: "https://x.com/ShibaXanders"
            }, {
                name: "Ragnar",
                profileImage: "/images/ragnar.webp",
                twitterUrl: "https://x.com/RagnarShiba"
            }, {
                name: "Vet Kusama",
                profileImage: "/images/vet-kusama.webp",
                twitterUrl: void 0
            }, {
                name: "Ayah Alfred",
                profileImage: "/images/ayan-alfred.webp",
                twitterUrl: void 0
            }, {
                name: "Shayan",
                profileImage: "/images/shayan.webp",
                twitterUrl: "https://x.com/MaestroShayan"
            }, {
                name: "Ivan Picazo",
                profileImage: "/images/ivan-picazo.webp",
                twitterUrl: "https://x.com/IamIvanPicazo"
            }, {
                name: "Shiba Gio",
                profileImage: "/images/shiba-gio.webp",
                twitterUrl: "https://x.com/Shiba_Gio"
            }];

            function V() {
                let e = (0, l.useRef)(null),
                    a = (0, s.W)(e, {
                        once: !0,
                        margin: "-10% 0px -10% 0px"
                    });
                return (0, i.jsx)("section", {
                    // id: "partners",
                    // className: "flex w-full flex-col items-center justify-center bg-white py-20 shadow-2xl",
                    // children: (0, i.jsxs)("div", {
                    //     ref: e,
                    //     className: "w-full max-w-6xl items-center justify-center px-4",
                    //     children: [(0, i.jsx)(n?.P?.div || "div", {
                    //         initial: {
                    //             opacity: 0,
                    //             y: 30
                    //         },
                    //         animate: a ? {
                    //             opacity: 1,
                    //             y: 0
                    //         } : {},
                    //         transition: {
                    //             duration: .8,
                    //             ease: "easeOut"
                    //         },
                    //         className: "mb-16 flex justify-center",
                    //         children: (0, i.jsxs)(n?.P?.a || "a", {
                    //             initial: {
                    //                 opacity: 0,
                    //                 scale: .9
                    //             },
                    //             animate: a ? {
                    //                 opacity: 1,
                    //                 scale: 1
                    //             } : {},
                    //             transition: {
                    //                 duration: .6,
                    //                 delay: .2,
                    //                 ease: "easeOut"
                    //             },
                    //             href: "https://x.com/ManyuShiba/status/1940492418069287170",
                    //             target: "_blank",
                    //             rel: "noopener noreferrer",
                    //             className: "flex cursor-pointer items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 transition-colors duration-200 hover:bg-yellow-500",
                    //             children: [(0, i.jsx)(n?.P?.div || "div", {
                    //                 initial: {
                    //                     opacity: 0,
                    //                     rotate: -10
                    //                 },
                    //                 animate: a ? {
                    //                     opacity: 1,
                    //                     rotate: 0
                    //                 } : {},
                    //                 transition: {
                    //                     duration: .5,
                    //                     delay: .4,
                    //                     ease: "easeOut"
                    //                 },
                    //                 className: "w-10",
                    //                 children: (0, i.jsx)(v.default, {
                    //                     src: "/images/logo-partners.webp",
                    //                     alt: "Shiba Inu Logo",
                    //                     width: 40,
                    //                     height: 40
                    //                 })
                    //             }), (0, i.jsx)(n?.P?.div || "div", {
                    //                 initial: {
                    //                     opacity: 0,
                    //                     x: 20
                    //                 },
                    //                 animate: a ? {
                    //                     opacity: 1,
                    //                     x: 0
                    //                 } : {},
                    //                 transition: {
                    //                     duration: .6,
                    //                     delay: .5,
                    //                     ease: "easeOut"
                    //                 },
                    //                 children: (0, i.jsx)(g.E, {
                    //                     size: "huge-3",
                    //                     className: "font-musashi text-white text-xl text-center sm:text-2xl lg:text-3xl",
                    //                     children: "Partnered with Shiba Inu Team"
                    //                 })
                    //             })]
                    //         })
                    //     }), (0, i.jsx)(n?.P?.div || "div", {
                    //         initial: {
                    //             opacity: 0,
                    //             y: 30
                    //         },
                    //         animate: a ? {
                    //             opacity: 1,
                    //             y: 0
                    //         } : {},
                    //         transition: {
                    //             duration: .8,
                    //             delay: .3,
                    //             ease: "easeOut"
                    //         },
                    //         className: "mx-auto flex max-w-4xl flex-wrap justify-center gap-10",
                    //         children: K.map((e, t) => (0, i.jsx)(n?.P?.div || "div", {
                    //             initial: {
                    //                 opacity: 0,
                    //                 y: 30,
                    //                 scale: .9
                    //             },
                    //             animate: a ? {
                    //                 opacity: 1,
                    //                 y: 0,
                    //                 scale: 1
                    //             } : {},
                    //             transition: {
                    //                 duration: .6,
                    //                 delay: .4 + .1 * t,
                    //                 ease: "easeOut"
                    //             },
                    //             className: "flex flex-col items-center text-center",
                    //             children: [(0, i.jsx)(n?.P?.div || "div", {
                    //                 initial: {
                    //                     opacity: 0,
                    //                     scale: .8
                    //                 },
                    //                 animate: a ? {
                    //                     opacity: 1,
                    //                     scale: 1
                    //                 } : {},
                    //                 transition: {
                    //                     duration: .5,
                    //                     delay: .6 + .1 * t,
                    //                     ease: "easeOut"
                    //                 },
                    //                 whileHover: {
                    //                     scale: 1.05
                    //                 },
                    //                 className: "mb-4 h-40 w-40 cursor-pointer overflow-hidden rounded-full border-4 border-white shadow-lg transition-transform duration-700 ease-in",
                    //                 children: (0, i.jsx)(v.default, {
                    //                     src: e.profileImage,
                    //                     alt: e.name,
                    //                     width: 165,
                    //                     height: 165,
                    //                     className: "h-full w-full object-cover"
                    //                 })
                    //             }), (0, i.jsx)(n?.P?.div || "div", {
                    //                 initial: {
                    //                     opacity: 0,
                    //                     y: 15
                    //                 },
                    //                 animate: a ? {
                    //                     opacity: 1,
                    //                     y: 0
                    //                 } : {},
                    //                 transition: {
                    //                     duration: .5,
                    //                     delay: .7 + .1 * t,
                    //                     ease: "easeOut"
                    //                 },
                    //                 children: (0, i.jsx)(g.E, {
                    //                     size: "huge-3",
                    //                     className: "font-musashi mb-2 text-zinc-600",
                    //                     children: e.name
                    //                 })
                    //             }), e.twitterUrl && (0, i.jsxs)(n?.P?.a || "a", {
                    //                 initial: {
                    //                     opacity: 0,
                    //                     y: 15
                    //                 },
                    //                 animate: a ? {
                    //                     opacity: 1,
                    //                     y: 0
                    //                 } : {},
                    //                 transition: {
                    //                     duration: .5,
                    //                     delay: .8 + .1 * t,
                    //                     ease: "easeOut"
                    //                 },
                    //                 whileHover: {
                    //                     scale: 1.05
                    //                 },
                    //                 href: e.twitterUrl,
                    //                 target: "_blank",
                    //                 rel: "noopener noreferrer",
                    //                 className: "flex items-center gap-1 text-zinc-600 transition-colors duration-200 hover:text-blue-500",
                    //                 children: [(0, i.jsx)(g.E, {
                    //                     size: "sm",
                    //                     className: "text-zinc-600",
                    //                     children: "Follow On"
                    //                 }), (0, i.jsx)(M.TCj, {})]
                    //             })]
                    //         }, e.name))
                    //     })]
                    // })
                })
            }
            var J = t(5116);

            function Z(e) {
                let { ...a
                } = e;
                return (0, i.jsx)(J.bL, {
                    "data-slot": "accordion",
                    ...a
                })
            }

            function ee(e) {
                let {
                    className: a,
                    ...t
                } = e;
                return (0, i.jsx)(J.q7, {
                    "data-slot": "accordion-item",
                    className: (0, r.cn)("border-b last:border-b-0", a),
                    ...t
                })
            }

            function ea(e) {
                let {
                    className: a,
                    children: t,
                    ...s
                } = e;
                return (0, i.jsx)(J.Y9, {
                    className: "flex",
                    children: (0, i.jsx)(J.l9, {
                        "data-slot": "accordion-trigger",
                        className: (0, r.cn)("group justify-between cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", a),
                        ...s,
                        children: t
                    })
                })
            }

            function et(e) {
                let {
                    className: a,
                    children: t,
                    ...s
                } = e;
                return (0, i.jsx)(J.UC, {
                    "data-slot": "accordion-content",
                    className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
                    ...s,
                    children: (0, i.jsx)("div", {
                        className: (0, r.cn)("pt-0 pb-4", a),
                        children: t
                    })
                })
            }
            let ei = [{
                quarter: "Q3 2025",
                period: "(August – September)",
                steps: [{
                    step: 1,
                    title: "YouTube Takeover Campaign",
                    description: "We're initiating a full-scale YouTube offensive, partnering with top-tier crypto content creators with over a million of subscribers combined across multiple regions to push $MANYU to the forefront of retail visibility."
                }, {
                    step: 2,
                    title: "IP Filing and Protection",
                    description: "To safeguard our brand and ensure longevity, we're undergoing formal intellectual property filing and legal protection processes across key jurisdictions. This secures the identity of MANYU and paves the way for future merchandising, licensing deals, and mainstream partnerships, to unlock powerful new revenue streams."
                }, {
                    step: 3,
                    title: "ManyuSwap",
                    description: "Designed with simplicity, speed, and security in mind, ManyuSwap will allow seamless swapping of tokens while integrating features like community farming pools, staking, and exclusive meme pair listings. As the $MANYU ecosystem expands, this native DEX will serve as the beating heart of our utility layer."
                }, {
                    step: 4,
                    title: "Manyu Bridge (cross-chain)",
                    description: "The Manyu Bridge started with BSC, and other top chains are in the works. This ensures that $MANYU isn't just confined to one network, but accessible to broader audiences across the crypto landscape."
                }, {
                    step: 5,
                    title: "Further Tier 1 CEX listing",
                    description: "Building on the momentum of our existing major listings, we're actively working on onboarding additional Tier 1 centralized exchanges to maximize global exposure and accessibility for $MANYU. Each new listing opens the doors to millions of new users and deepens market trust."
                }, {
                    step: 6,
                    title: "Partnership with Major Altcoin",
                    description: "We're finalizing a major partnership with a top-performing altcoin project with a utility and massive ecosystem. This partnership will unlock shared utilities, cross-community engagement, and new co-marketing opportunities."
                }, {
                    step: 7,
                    title: "Wormhole between 3 Major Networks",
                    description: "MANYU is building a cross-network wormhole that will connect Ethereum, Binance Smart and more networks, enabling seamless token transfers, increased liquidity, and wider exposure."
                }, {
                    step: 8,
                    title: "Community Giveaways",
                    description: "MANYU will roll out continuous community giveaways. These events won't just boost morale but also encourage viral participation, helping spread the MANYU brand across social platforms while giving back to the holders who make this journey possible."
                }, {
                    step: 9,
                    title: "Owner Collaboration",
                    description: "We're actively working on an official collaboration with the owner of Little Manyu. This collaboration aims to bridge the gap between the meme world and reality, and give $MANYU a level of authenticity while unlocking unique content, and potential co-branded initiatives."
                }, {
                    step: 10,
                    title: "Multi 6 Figure Burns",
                    description: "$MANYU will execute multiple six-figure token burns throughout the roadmap. These burns are aimed at reducing supply significantly, increasing scarcity, and rewarding long-term holders."
                }]
            }, {
                quarter: "Q4 2025",
                period: "(October – December)",
                steps: [{
                    step: 1,
                    title: "Manyu Launchpad",
                    description: "The Manyu Launchpad will serve as a dedicated platform to launch new memes and community-driven tokens."
                }, {
                    step: 2,
                    title: "Revenue Share Model",
                    description: "The Manyu Revenue Share Model will introduce a sustainable mechanism to reward the community directly. A portion of revenues generated through ecosystem utilities (such as the launchpad and swap), and upcoming platform fees will be redistributed to $MANYU holders."
                }, {
                    step: 3,
                    title: "New Buyback Initiative",
                    description: "Using funds generated through ecosystem revenues and strategic reserves, the team will conduct periodic buybacks of $MANYU tokens from the open market. These tokens may be burned or used for future incentives."
                }, {
                    step: 4,
                    title: "Million Dollar Burns",
                    description: "A bold move to reinforce $MANYU's deflationary tokenomics, we're committed to executing Million Dollar Burns: massive, public, and transparent token burns that permanently remove $MANYU from circulation."
                }, {
                    step: 5,
                    title: "Myusic Music Bot",
                    description: "The Myusic Music Bot is an exclusive Telegram bot created for the MANYU community, allowing holders to play, mix, create, and playlist songs in their groups. The bot integrates custom playlists and allows Telegram bridging to provide a global vibe and channels. Turning Music into a viral phenomenon across all of DeFi."
                }, {
                    step: 6,
                    title: "Perps/Futures Trading on Tier 1 CEX",
                    description: "MANYU is preparing to level up its market presence with Perpetual and Futures trading integration on Tier 1 centralized exchanges."
                }, {
                    step: 7,
                    title: "On-boarding Meme Foundation Fathers",
                    description: "By aligning with the pioneers of meme success, MANYU strengthens its roots and amplifies its voice across communities that know what it takes to go from 0 to billions."
                }, {
                    step: 8,
                    title: "Cross Project Collaboration",
                    description: "Partnerships to unlock co-marketing opportunities, shared utility, and expanded community exposure. Each collaboration will be handpicked by utility and passion. MANYU as the meme hub of the space."
                }, {
                    step: 9,
                    title: "Manyushi NFT Collection",
                    description: "Introducing the Manyushi NFT Collection. They'll serve as digital badges of honor for early adopters, with potential utility tied to future events, access to exclusive communities, voting, and even DAO influence over upcoming ecosystem features."
                }, {
                    step: 10,
                    title: "Stake2Earn Protocol",
                    description: "The Stake2Earn Protocol will empower $MANYU holders to put their tokens to work by staking and earning passive rewards. This mechanism is designed to drive long-term holding, reduce circulating supply, and strengthen community commitment."
                }]
            }, {
                quarter: "Q1 2026",
                period: "(January - March)",
                steps: [{
                    step: 1,
                    title: "Manyu Chain",
                    description: "The Manyu Chain will be our very own blockchain ecosystem, built to give $MANYU unmatched scalability, speed, and flexibility. By creating a dedicated chain, we unlock the potential for custom dApps, NFT integrations, DeFi tools, and cross-chain interoperability."
                }, {
                    step: 2,
                    title: "Gas Optimization",
                    description: "We understand that transaction costs can be a barrier to entry for many users. That's why Gas Optimization will be a key focus. Streamlining smart contract efficiency and implementing advanced optimization techniques to reduce fees significantly."
                }, {
                    step: 3,
                    title: "Manyu Farming Pools",
                    description: "To reward long-term supporters and strengthen liquidity, Manyu Farming Pools will allow holders to stake their MANYU or LP tokens and earn attractive rewards."
                }, {
                    step: 4,
                    title: "Launchpad upgrade V2",
                    description: "V2 will introduce enhanced features, a smoother user experience, and broader project integration. V2 will focus on faster onboarding for new projects, multi-chain support, and exclusive access for MANYU holders to participate in high-potential launches."
                }, {
                    step: 5,
                    title: "Charity Initiative",
                    description: "MANYU's Charity Initiative will channel a portion of ecosystem profits and special event proceeds toward causes that matter. From animal welfare and global disaster relief to community-driven campaigns, the initiative reflects our commitment to giving back while building a positive public "
                }, {
                    step: 6,
                    title: "AI Agent",
                    description: "MANYU's AI Agent will be a 24/7 smart assistant for the community, delivering instant updates, tracking market trends, and boosting engagement, keeping MANYU ahead of the curve."
                }, {
                    step: 7,
                    title: "Global Exchange Exposure",
                    description: "Strategic listings across top exchanges worldwide to maximize accessibility, boost liquidity, and cement MANYU's presence in every major crypto market."
                }, {
                    step: 8,
                    title: "Trading and Sniper Bot",
                    description: "Advanced bot tools designed to give the MANYU community an edge, enabling fast, efficient trading and precision sniping opportunities across supported exchanges."
                }, {
                    step: 9,
                    title: "Real World Asset (RWA)",
                    description: "Bringing tangible, real-world assets into the MANYU ecosystem, creating new avenues for utility, value, and long-term investor confidence."
                }, {
                    step: 10,
                    title: "Sponsor a Major Sporting Team/Event",
                    description: "Aligning MANYU with globally recognized sports teams or events to tap into massive fan bases, boost brand visibility, and cement our presence in mainstream culture."
                }]
            }, {
                quarter: "Q2 2026",
                period: "(April - June)",
                steps: [{
                    step: 1,
                    title: "Manyuverse",
                    description: "The central hub of the $MANYU ecosystem, where community, entertainment, and blockchain utility converge. A fully immersive world built to expand the brand beyond charts into culture."
                }, {
                    step: 2,
                    title: "Mini P2E Game",
                    description: "A casual yet addictive Play-to-Earn game designed for mass adoption, giving holders fun ways to engage while earning rewards that fuel the ecosystem."
                }, {
                    step: 3,
                    title: "Gamer and Streamer Partnerships",
                    description: 'Strategic collaborations with influential gamers and streamers on "Twitch" and "Kick" to bring $MANYU to millions of engaged viewers worldwide, boosting awareness and adoption.'
                }, {
                    step: 4,
                    title: "Sponsor Major Sporting Team/Event",
                    description: "Aligning $MANYU with global sports culture through high-profile sponsorships, driving massive exposure both online and offline."
                }, {
                    step: 5,
                    title: "Crypto Booths",
                    description: "Branded $MANYU booths at major expos and crypto events, giving retail and institutional audiences direct interaction with the brand."
                }, {
                    step: 6,
                    title: "Manyu Debit Cards",
                    description: "Merging real-world utility with blockchain by offering $MANYU-branded debit cards, enabling holders to spend crypto anywhere with style."
                }]
            }];

            function es() {
                let e = (0, l.useRef)(null),
                    a = (0, s.W)(e, {
                        once: !0,
                        margin: "-10% 0px -10% 0px"
                    }),
                    t = (0, l.useRef)(null),
                    o = (0, l.useRef)(null),
                    c = (0, l.useRef)(null),
                    d = (0, l.useRef)(null),
                    p = (0, s.W)(t, {
                        once: !0,
                        margin: "-20% 0px -20% 0px"
                    }),
                    x = (0, s.W)(o, {
                        once: !0,
                        margin: "-20% 0px -20% 0px"
                    }),
                    h = [p, x, (0, s.W)(c, {
                        once: !0,
                        margin: "-20% 0px -20% 0px"
                    }), (0, s.W)(d, {
                        once: !0,
                        margin: "-20% 0px -20% 0px"
                    })],
                    u = {
                        hidden: {
                            opacity: 0,
                            y: 30
                        },
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    };
                // return (0, i.jsxs)("section", {
                //     id: "roadmap",
                //     className: "bg-background relative flex w-full flex-col items-center justify-center px-4 py-16 text-center sm:py-20 md:py-24 lg:py-30",
                //     children: [(0, i.jsx)("div", {
                //         className: "pointer-events-none fixed inset-0 overflow-hidden",
                //         children: (0, i.jsxs)("svg", {
                //             className: "absolute top-0 left-0 w-full opacity-5",
                //             style: {
                //                 height: "100vh"
                //             },
                //             viewBox: "0 0 100 100",
                //             preserveAspectRatio: "xMidYMid slice",
                //             children: [(0, i.jsx)("defs", {
                //                 children: (0, i.jsxs)("pattern", {
                //                     id: "unifiedPattern",
                //                     patternUnits: "userSpaceOnUse",
                //                     width: "30",
                //                     height: "30",
                //                     children: [(0, i.jsx)("path", {
                //                         d: "M-3,3 l6,-6 M0,15 l15,-15 M12,18 l6,-6",
                //                         stroke: "white",
                //                         strokeWidth: "0.4",
                //                         fill: "none",
                //                         opacity: "0.3"
                //                     }), (0, i.jsx)("path", {
                //                         d: "M15,0 L30,8.66 L30,26 L15,34.64 L0,26 L0,8.66 Z",
                //                         fill: "none",
                //                         stroke: "white",
                //                         strokeWidth: "0.2",
                //                         opacity: "0.2"
                //                     })]
                //                 })
                //             }), (0, i.jsx)("rect", {
                //                 x: "0",
                //                 y: "0",
                //                 width: "100",
                //                 height: "100",
                //                 fill: "url(#unifiedPattern)"
                //             })]
                //         })
                //     }), (0, i.jsx)(n?.P?.div || "div", {
                //         ref: e,
                //         variants: {
                //             hidden: {
                //                 opacity: 0
                //             },
                //             visible: {
                //                 opacity: 1,
                //                 transition: {
                //                     staggerChildren: .3,
                //                     delayChildren: .2
                //                 }
                //             }
                //         },
                //         initial: "hidden",
                //         animate: a ? "visible" : "hidden",
                //         className: "flex w-full flex-col items-center",
                //         children: [(0, i.jsx)(n?.P?.div || "div", {
                //             variants: {
                //                 hidden: {
                //                     opacity: 0,
                //                     scale: .5,
                //                     rotate: -180
                //                 },
                //                 visible: {
                //                     opacity: 1,
                //                     scale: 1,
                //                     rotate: 0
                //                 }
                //             },
                //             className: "mb-6 sm:mb-8 lg:mb-10",
                //             children: (0, i.jsx)(v.default, {
                //                 src: "/images/logo.webp",
                //                 alt: "Manyu Logo",
                //                 width: 100,
                //                 height: 100,
                //                 className: "h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-[100px] lg:w-[100px]"
                //             })
                //         }), (0, i.jsx)(n?.P?.div || "div", {
                //             variants: u,
                //             className: "mb-4 sm:mb-6 lg:mb-8",
                //             children: (0, i.jsx)(m, {
                //                 as: "h2",
                //                 className: "text-xl leading-tight font-thin text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
                //                 children: "The Manyu Playbook"
                //             })
                //         }), (0, i.jsxs)(n?.P?.p || "p", {
                //             variants: u,
                //             className: "mb-4 max-w-4xl px-4 text-center text-sm font-thin text-white/80 sm:mb-6 sm:max-w-5xl sm:px-6 sm:text-base md:text-lg lg:mb-8 lg:max-w-7xl lg:px-8 lg:text-lg xl:text-xl",
                //             children: ["Our roadmap spans four quarters, from", " ", (0, i.jsx)("span", {
                //                 className: "font-musashi text-lg font-normal text-white sm:text-xl md:text-2xl",
                //                 children: "Q3 2025"
                //             }), " ", "to", " ", (0, i.jsx)("span", {
                //                 className: "font-musashi text-lg font-normal text-white sm:text-xl md:text-2xl",
                //                 children: "Q2 2026"
                //             }), ". Each phase represents a strategic milestone in the", " ", (0, i.jsx)("span", {
                //                 className: "font-musashi text-lg font-normal text-white sm:text-xl md:text-2xl",
                //                 children: "MANYU ecosystem"
                //             }), "'s evolution, transforming", " ", (0, i.jsx)("span", {
                //                 className: "font-musashi text-lg font-normal text-white sm:text-xl md:text-2xl",
                //                 children: "$MANYU"
                //             }), " ", "from a meme token into a comprehensive blockchain ecosystem."]
                //         }), (0, i.jsx)(n?.P?.p || "p", {
                //             variants: u,
                //             className: "mb-8 max-w-4xl px-4 text-center text-xs font-thin text-white/60 sm:mb-10 sm:max-w-5xl sm:px-6 sm:text-sm md:text-base lg:mb-12 lg:max-w-7xl lg:px-8",
                //             children: "Note: This roadmap was published in August 2025, achievements in July 2025 are not included"
                //         }), (0, i.jsx)(n?.P?.div || "div", {
                //             className: "w-full space-y-6 sm:space-y-8 lg:space-y-10",
                //             children: ei.map((e, a) => (0, i.jsx)(n?.P?.div || "div", {
                //                 ref: 0 === a ? t : 1 === a ? o : 2 === a ? c : d,
                //                 initial: "hidden",
                //                 animate: h[a] ? "visible" : "hidden",
                //                 variants: {
                //                     hidden: {
                //                         opacity: 0
                //                     },
                //                     visible: {
                //                         opacity: 1,
                //                         transition: {
                //                             staggerChildren: .2,
                //                             delayChildren: .2
                //                         }
                //                     }
                //                 },
                //                 className: "relative space-y-3 sm:space-y-4 lg:space-y-6",
                //                 children: [(0, i.jsx)(n?.P?.div || "div", {
                //                     variants: {
                //                         hidden: {
                //                             opacity: 0,
                //                             y: 50,
                //                             scale: .9
                //                         },
                //                         visible: {
                //                             opacity: 1,
                //                             y: 0,
                //                             scale: 1
                //                         }
                //                     },
                //                     transition: {
                //                         duration: .8,
                //                         ease: "easeOut"
                //                     },
                //                     className: "mx-auto max-w-3xl px-4 text-center sm:max-w-4xl sm:px-6 lg:max-w-5xl lg:px-8",
                //                     children: [(0, i.jsx)(n?.P?.h3 || "h3", {
                //                         variants: {
                //                             hidden: {
                //                                 opacity: 0,
                //                                 y: 40
                //                             },
                //                             visible: {
                //                                 opacity: 1,
                //                                 y: 0
                //                             }
                //                         },
                //                         transition: {
                //                             duration: .6,
                //                             ease: "easeOut"
                //                         },
                //                         className: "font-musashi text-2xl font-normal text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
                //                         children: e.quarter
                //                     }), (0, i.jsx)(n?.P?.p || "p", {
                //                         variants: {
                //                             hidden: {
                //                                 opacity: 0,
                //                                 y: 20
                //                             },
                //                             visible: {
                //                                 opacity: 1,
                //                                 y: 0
                //                             }
                //                         },
                //                         transition: {
                //                             duration: .6,
                //                             delay: .2,
                //                             ease: "easeOut"
                //                         },
                //                         className: "font-musashi text-lg font-normal text-white/50 sm:text-xl lg:text-2xl",
                //                         children: e.period
                //                     })]
                //                 }), (0, i.jsx)(n?.P?.div || "div", {
                //                     className: "mx-auto w-full max-w-3xl px-4 sm:max-w-4xl sm:px-6 lg:max-w-5xl lg:px-8",
                //                     variants: {
                //                         hidden: {
                //                             opacity: 0
                //                         },
                //                         visible: {
                //                             opacity: 1,
                //                             transition: {
                //                                 staggerChildren: .15,
                //                                 delayChildren: .3
                //                             }
                //                         }
                //                     },
                //                     children: (0, i.jsx)(Z, {
                //                         type: "multiple",
                //                         className: "w-full",
                //                         defaultValue: 0 === a ? ["step-1"] : [],
                //                         children: e.steps.map((a, t) => (0, i.jsx)(n?.P?.div || "div", {
                //                             variants: {
                //                                 hidden: {
                //                                     opacity: 0,
                //                                     x: -30,
                //                                     scale: .95
                //                                 },
                //                                 visible: {
                //                                     opacity: 1,
                //                                     x: 0,
                //                                     scale: 1
                //                                 }
                //                             },
                //                             transition: {
                //                                 duration: .6,
                //                                 ease: "easeOut"
                //                             },
                //                             children: (0, i.jsxs)(ee, {
                //                                 value: "step-".concat(t + 1),
                //                                 className: (0, r.cn)("border-white/20"),
                //                                 children: [(0, i.jsxs)(ea, {
                //                                     className: (0, r.cn)("text-white hover:text-white/80"),
                //                                     children: [(0, i.jsxs)("div", {
                //                                         className: "flex items-center gap-2 sm:gap-3 lg:gap-4",
                //                                         children: [(0, i.jsx)("span", {
                //                                             className: (0, r.cn)("font-musashi flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-lg font-normal text-white sm:h-10 sm:w-10 sm:text-xl lg:text-2xl", {
                //                                                 "bg-green-500/80": "Q3 2025" === e.quarter && [1, 2, 3, 4, 5, 6, 7, 8].includes(a.step) || "Q4 2025" === e.quarter && [1, 2, 3].includes(a.step) || "Q1 2026" === e.quarter && [0].includes(a.step) || "Q2 2026" === e.quarter && [0].includes(a.step)
                //                                             }),
                //                                             children: a.step
                //                                         }), (0, i.jsx)("span", {
                //                                             className: (0, r.cn)("font-musashi text-lg group-hover:underline sm:text-xl lg:text-2xl xl:text-3xl"),
                //                                             children: a.title
                //                                         })]
                //                                     }), (0, i.jsx)("svg", {
                //                                         className: (0, r.cn)("h-5 w-5 shrink-0 text-white transition-transform duration-200 sm:h-6 sm:w-6"),
                //                                         xmlns: "http://www.w3.org/2000/svg",
                //                                         fill: "none",
                //                                         viewBox: "0 0 24 24",
                //                                         stroke: "currentColor",
                //                                         children: (0, i.jsx)("path", {
                //                                             strokeLinecap: "round",
                //                                             strokeLinejoin: "round",
                //                                             strokeWidth: 2,
                //                                             d: "M19 9l-7 7-7-7"
                //                                         })
                //                                     })]
                //                                 }), (0, i.jsx)(et, {
                //                                     children: (0, i.jsx)("p", {
                //                                         className: (0, r.cn)("text-justify text-sm leading-relaxed font-light text-white/90 sm:text-base lg:text-lg"),
                //                                         children: a.description
                //                                     })
                //                                 })]
                //                             })
                //                         }, "".concat(e.quarter, "-").concat(a.step)))
                //                     })
                //                 })]
                //             }, e.quarter))
                //         })]
                //     })]
                // })
            }

            function en() {
                let e = (0, l.useRef)(null),
                    a = (0, s.W)(e, {
                        once: !0,
                        margin: "-10% 0px -10% 0px"
                    }),
                    t = [{
                        icon: (0, i.jsx)(k.Itl, {
                            className: "size-8.5"
                        }),
                        title: "100% Liquidity Burnt",
                        description: "Liquidity tokens permanently removed from circulation, creating a stable trading environment"
                    }, {
                        icon: (0, i.jsx)(k.H5e, {
                            className: "size-8.5"
                        }),
                        title: "1 Billion Total Supply",
                        description: "Fixed token supply with no possibility of inflation or additional minting"
                    }, {
                        icon: (0, i.jsx)(k.JhU, {
                            className: "size-8.5"
                        }),
                        title: "Contract Renounced",
                        description: "Ownership relinquished, ensuring no single entity can modify the contract"
                    }, {
                        icon: (0, i.jsx)(k.KaY, {
                            className: "size-6"
                        }),
                        title: "0/0 TAX",
                        description: "Zero tax on buys and sells, maximizing value for traders and holders"
                    }];
                return (0, i.jsxs)("section", {
                    id: "tokenomics",
                    className: "relative w-full overflow-hidden py-20 text-white",
                    children: [(0, i.jsx)("div", {
                        className: "absolute inset-0 z-0",
                        children: (0, i.jsx)("iframe", {
                            src: "https://www.youtube.com/embed/9XCyKtFsYbg?autoplay=1&mute=1&loop=1&playlist=9XCyKtFsYbg&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&version=3&playerapiid=ytplayer",
                            className: "h-full w-full scale-150 brightness-50",
                            frameBorder: "0",
                            allow: "autoplay; encrypted-media",
                            allowFullScreen: !0
                        })
                    }), (0, i.jsx)("div", {
                        className: "absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent"
                    }), (0, i.jsxs)("div", {
                        ref: e,
                        className: "relative z-20 flex flex-col items-center gap-6",
                        children: [(0, i.jsx)(n?.P?.div || "div", {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: a ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: .8,
                                ease: "easeOut"
                            },
                            className: "mb-16 text-center",
                            children: [(0, i.jsx)(m, {
                                as: "h1",
                                className: "mb-4 text-6xl font-black tracking-tight uppercase md:text-8xl",
                                children: "NALANOMICS"
                            }), (0, i.jsx)(n?.P?.div || "div", {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: a ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    duration: .6,
                                    delay: .3,
                                    ease: "easeOut"
                                },
                                children: (0, i.jsx)(g.E, {
                                    size: "xl",
                                    className: "mx-auto max-w-2xl text-zinc-300 md:text-2xl",
                                    children: "The foundation of $NALA'S economic model - transparent, fair, and community-focused"
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "flex flex-wrap justify-center gap-4",
                            children: t.map((e, t) => (0, i.jsx)(n?.P?.div || "div", {
                                initial: {
                                    opacity: 0,
                                    y: 30,
                                    scale: .95
                                },
                                animate: a ? {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1
                                } : {},
                                transition: {
                                    duration: .6,
                                    delay: .4 + .1 * t,
                                    ease: "easeOut"
                                },
                                className: "max-w-[320px] border border-white/20 bg-black/30 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-black/40",
                                children: (0, i.jsxs)("div", {
                                    className: "flex flex-col items-start justify-start text-left",
                                    children: [(0, i.jsx)(n?.P?.div || "div", {
                                        initial: {
                                            opacity: 0,
                                            scale: .8
                                        },
                                        animate: a ? {
                                            opacity: 1,
                                            scale: 1
                                        } : {},
                                        transition: {
                                            duration: .5,
                                            delay: .6 + .1 * t,
                                            ease: "easeOut"
                                        },
                                        className: "mb-4 flex size-18 items-center justify-center rounded-lg bg-white/90 text-black backdrop-blur-sm",
                                        children: e.icon
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-col items-start justify-start gap-2",
                                        children: [(0, i.jsx)(n?.P?.div || "div", {
                                            initial: {
                                                opacity: 0,
                                                y: 15
                                            },
                                            animate: a ? {
                                                opacity: 1,
                                                y: 0
                                            } : {},
                                            transition: {
                                                duration: .5,
                                                delay: .7 + .1 * t,
                                                ease: "easeOut"
                                            },
                                            children: (0, i.jsx)(g.E, {
                                                size: "huge",
                                                className: "font-musashi text-left text-white",
                                                children: e.title
                                            })
                                        }), (0, i.jsx)(n?.P?.div || "div", {
                                            initial: {
                                                opacity: 0,
                                                y: 15
                                            },
                                            animate: a ? {
                                                opacity: 1,
                                                y: 0
                                            } : {},
                                            transition: {
                                                duration: .5,
                                                delay: .8 + .1 * t,
                                                ease: "easeOut"
                                            },
                                            children: (0, i.jsx)(g.E, {
                                                size: "md",
                                                className: "leading-5! text-zinc-200",
                                                children: e.description
                                            })
                                        })]
                                    })]
                                })
                            }, t))
                        }), (0, i.jsx)(n?.P?.div || "div", {
                            initial: {
                                opacity: 0,
                                y: 30,
                                scale: .95
                            },
                            animate: a ? {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            } : {},
                            transition: {
                                duration: .6,
                                delay: .8,
                                ease: "easeOut"
                            },
                            className: "mx-auto mb-16 max-w-2xl border border-white/20 bg-black/30 p-6 backdrop-blur-md",
                            children: (0, i.jsxs)("div", {
                                className: "flex flex-col items-center justify-center gap-6 text-center",
                                children: [(0, i.jsx)(n?.P?.div || "div", {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: a ? {
                                        opacity: 1,
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: .6,
                                        delay: 1,
                                        ease: "easeOut"
                                    },
                                    children: (0, i.jsx)(g.E, {
                                        size: "huge-3",
                                        className: "font-musashi text-center text-xl text-white sm:text-2xl lg:text-3xl",
                                        children: "Contract Address"
                                    })
                                }), (0, i.jsx)(n?.P?.div || "div", {
                                    initial: {
                                        opacity: 0,
                                        y: 15
                                    },
                                    animate: a ? {
                                        opacity: 1,
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: .5,
                                        delay: 1.1,
                                        ease: "easeOut"
                                    },
                                    children: (0, i.jsx)(g.E, {
                                        size: "xs",
                                        className: "mb-6 text-center font-mono sm:text-lg lg:text-xl",
                                        children: "0x000000000000000000000000"
                                    })
                                }), (0, i.jsx)(n?.P?.div || "div", {
                                    initial: {
                                        opacity: 0,
                                        y: 15
                                    },
                                    animate: a ? {
                                        opacity: 1,
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: .5,
                                        delay: 1.2,
                                        ease: "easeOut"
                                    },
                                    className: "flex justify-center gap-4",
                                    children: [(0, i.jsx)(u.i, {}), (0, i.jsx)(N(), {
                                        href: y.$.linkEtherscan,
                                        target: "_blank",
                                        children: (0, i.jsx)(h.$, {
                                            size: "sm",
                                            leftIcon: (0, i.jsx)(k.EQc, {
                                                className: "size-5"
                                            }),
                                            asChild: !0,
                                            className: "group",
                                            children: (0, i.jsx)(g.E, {
                                                size: "sm",
                                                weight: "semibold",
                                                className: "text-background group-hover:text-white",
                                                children: "Etherscan"
                                            })
                                        })
                                    })]
                                })]
                            })
                        }), (0, i.jsx)(X, {})]
                    })]
                })
            }

            function el() {
                return (0, i.jsxs)("main", {
                    className: "min-h-screen bg-black",
                    children: [(0, i.jsx)(z, {}), (0, i.jsxs)("div", {
                        className: "pt-20",
                        children: [(0, i.jsx)(I, {}), (0, i.jsx)(H, {}), (0, i.jsx)(p, {}), (0, i.jsx)(es, {}), (0, i.jsx)(B, {}), (0, i.jsx)(V, {}), (0, i.jsx)(en, {}), (0, i.jsx)(x, {}), (0, i.jsx)(W, {}), (0, i.jsx)(F, {})]
                    })]
                })
            }
        },
        7168: (e, a, t) => {
            "use strict";
            t.d(a, {
                $: () => m
            });
            var i = t(5155),
                s = t(9708),
                n = t(2085),
                l = t(1154),
                r = t(6766),
                o = t(2115),
                c = t(3999);
            let d = (0, n.F)("cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative overflow-hidden text-decoration-none box-border", {
                variants: {
                    variant: {
                        default: 'bg-white text-background border-2 border-background border-white hover:border-white rounded-[300px] after:content-[""] after:absolute after:top-0 after:left-0 after:w-[150%] after:h-full after:bg-background after:transform after:rotate-[-90deg] after:translate-y-[-3em] after:origin-[0_100%] after:transition-all after:duration-400 after:ease-out after:z-[-1] hover:after:rotate-0 hover:after:translate-y-0 hover:text-white transition-colors duration-700',
                        primary: 'bg-background text-white border-2 border-white border-background hover:border-background rounded-[300px] after:content-[""] after:absolute after:top-0 after:left-0 after:w-[150%] after:h-full after:bg-white after:transform after:rotate-[-90deg] after:translate-y-[-3em] after:origin-[0_100%] after:transition-all after:duration-400 after:ease-out after:z-[-1] hover:after:rotate-0 hover:after:translate-y-0 hover:text-background transition-colors duration-700',
                        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                        link: "text-primary underline-offset-4 hover:underline"
                    },
                    size: {
                        default: "h-12 px-5 py-3 has-[>svg]:px-6 text-xl font-bold",
                        sm: "h-9 gap-1.5 px-4 has-[>svg]:px-6 text-xl font-bold",
                        lg: "h-14 rounded-md px-8 has-[>svg]:px-6 text-lg",
                        icon: "size-9"
                    }
                },
                defaultVariants: {
                    variant: "default",
                    size: "default"
                }
            }),
                m = o.forwardRef((e, a) => {
                    let {
                        className: t,
                        variant: n,
                        size: o,
                        asChild: m = !1,
                        isLoading: p = !1,
                        loadingTitle: x = "Carregando...",
                        leftIcon: h,
                        rightIcon: u,
                        children: g,
                        ...y
                    } = e, f = m ? s.DX : "button", b = (e, a) => e ? "string" == typeof e && (e.startsWith("/") || e.includes(".")) ? (0, i.jsx)(r.default, {
                        src: e,
                        alt: "".concat(a, " icon"),
                        width: 20,
                        height: 20,
                        className: "object-contain"
                    }) : (0, i.jsx)("span", {
                        className: "flex-shrink-0",
                        children: e
                    }) : null;
                    return p ? (0, i.jsxs)(f, {
                        "data-slot": "button",
                        className: (0, c.cn)(d({
                            variant: n,
                            size: o,
                            className: t
                        })),
                        ref: a,
                        ...y,
                        children: [(0, i.jsx)(l.A, {
                            className: "animate-spin"
                        }), x]
                    }) : (0, i.jsx)(f, {
                        "data-slot": "button",
                        className: (0, c.cn)(d({
                            variant: n,
                            size: o,
                            className: t
                        })),
                        ref: a,
                        ...y,
                        children: (0, i.jsxs)("span", {
                            className: "relative z-[1] flex items-center justify-center gap-2",
                            children: [b(h, "left"), (0, i.jsx)("span", {
                                className: "flex-shrink-0",
                                children: g
                            }), b(u, "right")]
                        })
                    })
                });
            m.displayName = "Button"
        },
        7532: (e, a, t) => {
            "use strict";
            t.d(a, {
                i: () => c
            });
            var i = t(5155),
                s = t(7168),
                n = t(3999),
                l = t(406),
                r = t(2115),
                o = t(9911);

            function c(e) {
                let {
                    displayText: a,
                    className: t,
                    size: c = "sm",
                    variant: d = "default"
                } = e, [m, p] = (0, r.useState)(!1), x = l.$.hash, h = async () => {
                    try {
                        await navigator.clipboard.writeText(x), p(!0), setTimeout(() => p(!1), 2e3)
                    } catch (e) {
                        console.error("Failed to copy text: ", e)
                    }
                };
                return (0, i.jsx)(s.$, {
                    size: c,
                    variant: d,
                    leftIcon: (0, i.jsx)(o.zU_, {
                        className: "size-5"
                    }),
                    onClick: h,
                    className: (0, n.cn)(t, "font-normal"),
                    asChild: !0,
                    children: m ? "Copied!" : a || "Copy"
                })
            }
        }
    },
    e => {
        var a = a => e(e.s = a);
        e.O(0, [711, 204, 760, 446, 653, 436, 441, 684, 358], () => a(61)), _N_E = e.O()
    }
]);