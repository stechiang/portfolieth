! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Choices = t() : e.Choices = t()
}(this, function() {
    return function(i) {
        var n = {};

        function s(e) {
            if (n[e]) return n[e].exports;
            var t = n[e] = {
                exports: {},
                id: e,
                loaded: !1
            };
            return i[e].call(t.exports, t, t.exports, s), t.loaded = !0, t.exports
        }
        return s.m = i, s.c = n, s.p = "/memory.js", s(0)
    }([function(e, t, i) {
        e.exports = i(1)
    }, function(e, t, i) {
        "use strict";
        var n = function() {
                function n(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(e, t, i) {
                    return t && n(e.prototype, t), i && n(e, i), e
                }
            }(),
            c = s(i(2)),
            r = s(i(3)),
            a = s(i(4)),
            p = i(31),
            y = i(32);

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }

        function b(e) {
            if (Array.isArray(e)) {
                for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
                return i
            }
            return Array.from(e)
        }
        i(33);
        var o = function() {
            function o() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "[data-choice]",
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                if (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, o), (0, y.isType)("String", e)) {
                    var i = document.querySelectorAll(e);
                    if (1 < i.length)
                        for (var n = 1; n < i.length; n++) {
                            new o(i[n], t)
                        }
                }
                var s = {
                    silent: !1,
                    items: [],
                    choices: [],
                    renderChoiceLimit: -1,
                    maxItemCount: -1,
                    addItems: !0,
                    removeItems: !0,
                    removeItemButton: !1,
                    editItems: !1,
                    duplicateItems: !0,
                    delimiter: ",",
                    paste: !0,
                    searchEnabled: !0,
                    searchChoices: !0,
                    searchFloor: 1,
                    searchResultLimit: 4,
                    searchFields: ["label", "value"],
                    position: "auto",
                    resetScrollPosition: !0,
                    regexFilter: null,
                    shouldSort: !0,
                    shouldSortItems: !1,
                    placeholder: !0,
                    placeholderValue: null,
                    searchPlaceholderValue: null,
                    prependValue: null,
                    appendValue: null,
                    renderSelectedChoices: "auto",
                    loadingText: "Loading...",
                    noResultsText: "No results found",
                    noChoicesText: "No choices to choose from",
                    itemSelectText: "Press to select",
                    addItemText: function(e) {
                        return 'Press Enter to add <b>"' + (0, y.stripHTML)(e) + '"</b>'
                    },
                    maxItemText: function(e) {
                        return "Only " + e + " values can be added."
                    },
                    itemComparer: function(e, t) {
                        return e === t
                    },
                    uniqueItemText: "Only unique values can be added.",
                    classNames: {
                        containerOuter: "choices",
                        containerInner: "choices__inner",
                        input: "choices__input",
                        inputCloned: "choices__input--cloned",
                        list: "choices__list",
                        listItems: "choices__list--multiple",
                        listSingle: "choices__list--single",
                        listDropdown: "choices__list--dropdown",
                        item: "choices__item",
                        itemSelectable: "choices__item--selectable",
                        itemDisabled: "choices__item--disabled",
                        itemChoice: "choices__item--choice",
                        placeholder: "choices__placeholder",
                        group: "choices__group",
                        groupHeading: "choices__heading",
                        button: "choices__button",
                        activeState: "is-active",
                        focusState: "is-focused",
                        openState: "is-open",
                        disabledState: "is-disabled",
                        highlightedState: "is-highlighted",
                        hiddenState: "is-hidden",
                        flippedState: "is-flipped",
                        loadingState: "is-loading",
                        noResults: "has-no-results",
                        noChoices: "has-no-choices"
                    },
                    fuseOptions: {
                        include: "score"
                    },
                    callbackOnInit: null,
                    callbackOnCreateTemplates: null
                };
                if (this.idNames = {
                        itemChoice: "item-choice"
                    }, this.config = (0, y.extend)(s, t), "auto" !== this.config.renderSelectedChoices && "always" !== this.config.renderSelectedChoices && (this.config.silent || console.warn("renderSelectedChoices: Possible values are 'auto' and 'always'. Falling back to 'auto'."), this.config.renderSelectedChoices = "auto"), this.store = new a.default(this.render), this.initialised = !1, this.currentState = {}, this.prevState = {}, this.currentValue = "", this.element = e, this.passedElement = (0, y.isType)("String", e) ? document.querySelector(e) : e, this.passedElement)
                    if (this.isTextElement = "text" === this.passedElement.type, this.isSelectOneElement = "select-one" === this.passedElement.type, this.isSelectMultipleElement = "select-multiple" === this.passedElement.type, this.isSelectElement = this.isSelectOneElement || this.isSelectMultipleElement, this.isValidElementType = this.isTextElement || this.isSelectElement, this.isIe11 = !(!navigator.userAgent.match(/Trident/) || !navigator.userAgent.match(/rv[ :]11/)), !(this.isScrollingOnIe = !1) === this.config.shouldSortItems && this.isSelectOneElement && (this.config.silent || console.warn("shouldSortElements: Type of passed element is 'select-one', falling back to false.")), this.highlightPosition = 0, this.canSearch = this.config.searchEnabled, this.placeholder = !1, this.isSelectOneElement || (this.placeholder = !!this.config.placeholder && (this.config.placeholderValue || this.passedElement.getAttribute("placeholder"))), this.presetChoices = this.config.choices, this.presetItems = this.config.items, this.passedElement.value && (this.presetItems = this.presetItems.concat(this.passedElement.value.split(this.config.delimiter))), this.baseId = (0, y.generateId)(this.passedElement, "choices-"), this.render = this.render.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onKeyUp = this._onKeyUp.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseOver = this._onMouseOver.bind(this), this._onPaste = this._onPaste.bind(this), this._onInput = this._onInput.bind(this), this.wasTap = !0, "classList" in document.documentElement || this.config.silent || console.error("Choices: Your browser doesn't support Choices"), (0, y.isElement)(this.passedElement) && this.isValidElementType) {
                        if ("active" === this.passedElement.getAttribute("data-choice")) return;
                        this.init()
                    } else this.config.silent || console.error("Incompatible input passed");
                else this.config.silent || console.error("Passed element not found")
            }
            return n(o, [{
                key: "init",
                value: function() {
                    if (!0 !== this.initialised) {
                        var e = this.config.callbackOnInit;
                        this.initialised = !0, this._createTemplates(), this._createInput(), this.store.subscribe(this.render), this.render(), this._addEventListeners(), e && (0, y.isType)("Function", e) && e.call(this)
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    if (!1 !== this.initialised) {
                        this._removeEventListeners(), this.passedElement.classList.remove(this.config.classNames.input, this.config.classNames.hiddenState), this.passedElement.removeAttribute("tabindex");
                        var e = this.passedElement.getAttribute("data-choice-orig-style");
                        Boolean(e) ? (this.passedElement.removeAttribute("data-choice-orig-style"), this.passedElement.setAttribute("style", e)) : this.passedElement.removeAttribute("style"), this.passedElement.removeAttribute("aria-hidden"), this.passedElement.removeAttribute("data-choice"), this.passedElement.value = this.passedElement.value, this.containerOuter.parentNode.insertBefore(this.passedElement, this.containerOuter), this.containerOuter.parentNode.removeChild(this.containerOuter), this.clearStore(), this.config.templates = null, this.initialised = !1
                    }
                }
            }, {
                key: "renderGroups",
                value: function(e, n, t) {
                    var s = this,
                        o = t || document.createDocumentFragment(),
                        i = this.config.sortFilter;
                    return this.config.shouldSort && e.sort(i), e.forEach(function(t) {
                        var e = n.filter(function(e) {
                            return s.isSelectOneElement ? e.groupId === t.id : e.groupId === t.id && !e.selected
                        });
                        if (1 <= e.length) {
                            var i = s._getTemplate("choiceGroup", t);
                            o.appendChild(i), s.renderChoices(e, o, !0)
                        }
                    }), o
                }
            }, {
                key: "renderChoices",
                value: function(e, t) {
                    var i = this,
                        n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                        s = t || document.createDocumentFragment(),
                        o = this.config,
                        r = o.renderSelectedChoices,
                        a = o.searchResultLimit,
                        c = o.renderChoiceLimit,
                        l = this.isSearching ? y.sortByScore : this.config.sortFilter,
                        h = function(e) {
                            if ("auto" !== r || (i.isSelectOneElement || !e.selected)) {
                                var t = i._getTemplate("choice", e);
                                s.appendChild(t)
                            }
                        },
                        u = e;
                    "auto" !== r || this.isSelectOneElement || (u = e.filter(function(e) {
                        return !e.selected
                    }));
                    var d = u.reduce(function(e, t) {
                            return t.placeholder ? e.placeholderChoices.push(t) : e.normalChoices.push(t), e
                        }, {
                            placeholderChoices: [],
                            normalChoices: []
                        }),
                        f = d.placeholderChoices,
                        p = d.normalChoices;
                    (this.config.shouldSort || this.isSearching) && p.sort(l);
                    var v = u.length,
                        m = [].concat(b(f), b(p));
                    this.isSearching ? v = a : 0 < c && !n && (v = c);
                    for (var g = 0; g < v; g++) m[g] && h(m[g]);
                    return s
                }
            }, {
                key: "renderItems",
                value: function(e) {
                    var i = this,
                        n = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null) || document.createDocumentFragment();
                    if (this.config.shouldSortItems && !this.isSelectOneElement && e.sort(this.config.sortFilter), this.isTextElement) {
                        var t = this.store.getItemsReducedToValues(e).join(this.config.delimiter);
                        this.passedElement.setAttribute("value", t), this.passedElement.value = t
                    } else {
                        var s = document.createDocumentFragment();
                        e.forEach(function(e) {
                            var t = i._getTemplate("option", e);
                            s.appendChild(t)
                        }), this.passedElement.innerHTML = "", this.passedElement.appendChild(s)
                    }
                    return e.forEach(function(e) {
                        var t = i._getTemplate("item", e);
                        n.appendChild(t)
                    }), n
                }
            }, {
                key: "render",
                value: function() {
                    if (!this.store.isLoading() && (this.currentState = this.store.getState(), this.currentState !== this.prevState)) {
                        if ((this.currentState.choices !== this.prevState.choices || this.currentState.groups !== this.prevState.groups || this.currentState.items !== this.prevState.items) && this.isSelectElement) {
                            var e = this.store.getGroupsFilteredByActive(),
                                t = this.store.getChoicesFilteredByActive(),
                                i = document.createDocumentFragment();
                            this.choiceList.innerHTML = "", this.config.resetScrollPosition && (this.choiceList.scrollTop = 0), 1 <= e.length && !0 !== this.isSearching ? i = this.renderGroups(e, t, i) : 1 <= t.length && (i = this.renderChoices(t, i));
                            var n = this.store.getItemsFilteredByActive(),
                                s = this._canAddItem(n, this.input.value);
                            if (i.childNodes && 0 < i.childNodes.length) s.response ? (this.choiceList.appendChild(i), this._highlightChoice()) : this.choiceList.appendChild(this._getTemplate("notice", s.notice));
                            else {
                                var o = void 0,
                                    r = void 0;
                                this.isSearching ? (r = (0, y.isType)("Function", this.config.noResultsText) ? this.config.noResultsText() : this.config.noResultsText, o = this._getTemplate("notice", r, "no-results")) : (r = (0, y.isType)("Function", this.config.noChoicesText) ? this.config.noChoicesText() : this.config.noChoicesText, o = this._getTemplate("notice", r, "no-choices")), this.choiceList.appendChild(o)
                            }
                        }
                        if (this.currentState.items !== this.prevState.items) {
                            var a = this.store.getItemsFilteredByActive();
                            if (this.itemList.innerHTML = "", a && a) {
                                var c = this.renderItems(a);
                                c.childNodes && this.itemList.appendChild(c)
                            }
                        }
                        this.prevState = this.currentState
                    }
                }
            }, {
                key: "highlightItem",
                value: function(e) {
                    var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                    if (!e) return this;
                    var i = e.id,
                        n = e.groupId,
                        s = 0 <= n ? this.store.getGroupById(n) : null;
                    return this.store.dispatch((0, p.highlightItem)(i, !0)), t && (s && s.value ? (0, y.triggerEvent)(this.passedElement, "highlightItem", {
                        id: i,
                        value: e.value,
                        label: e.label,
                        groupValue: s.value
                    }) : (0, y.triggerEvent)(this.passedElement, "highlightItem", {
                        id: i,
                        value: e.value,
                        label: e.label
                    })), this
                }
            }, {
                key: "unhighlightItem",
                value: function(e) {
                    if (!e) return this;
                    var t = e.id,
                        i = e.groupId,
                        n = 0 <= i ? this.store.getGroupById(i) : null;
                    return this.store.dispatch((0, p.highlightItem)(t, !1)), n && n.value ? (0, y.triggerEvent)(this.passedElement, "unhighlightItem", {
                        id: t,
                        value: e.value,
                        label: e.label,
                        groupValue: n.value
                    }) : (0, y.triggerEvent)(this.passedElement, "unhighlightItem", {
                        id: t,
                        value: e.value,
                        label: e.label
                    }), this
                }
            }, {
                key: "highlightAll",
                value: function() {
                    var t = this;
                    return this.store.getItems().forEach(function(e) {
                        t.highlightItem(e)
                    }), this
                }
            }, {
                key: "unhighlightAll",
                value: function() {
                    var t = this;
                    return this.store.getItems().forEach(function(e) {
                        t.unhighlightItem(e)
                    }), this
                }
            }, {
                key: "removeItemsByValue",
                value: function(t) {
                    var i = this;
                    return t && (0, y.isType)("String", t) && this.store.getItemsFilteredByActive().forEach(function(e) {
                        e.value === t && i._removeItem(e)
                    }), this
                }
            }, {
                key: "removeActiveItems",
                value: function(t) {
                    var i = this;
                    return this.store.getItemsFilteredByActive().forEach(function(e) {
                        e.active && t !== e.id && i._removeItem(e)
                    }), this
                }
            }, {
                key: "removeHighlightedItems",
                value: function() {
                    var t = this,
                        i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return this.store.getItemsFilteredByActive().forEach(function(e) {
                        e.highlighted && e.active && (t._removeItem(e), i && t._triggerChange(e.value))
                    }), this
                }
            }, {
                key: "showDropdown",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                        t = document.body,
                        i = document.documentElement,
                        n = Math.max(t.scrollHeight, t.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight);
                    this.containerOuter.classList.add(this.config.classNames.openState), this.containerOuter.setAttribute("aria-expanded", "true"), this.dropdown.classList.add(this.config.classNames.activeState), this.dropdown.setAttribute("aria-expanded", "true");
                    var s = this.dropdown.getBoundingClientRect(),
                        o = Math.ceil(s.top + window.scrollY + this.dropdown.offsetHeight),
                        r = !1;
                    return "auto" === this.config.position ? r = n + 1e4 <= o : "top" === this.config.position && (r = !0), r && this.containerOuter.classList.add(this.config.classNames.flippedState), e && this.canSearch && document.activeElement !== this.input && this.input.focus(), (0, y.triggerEvent)(this.passedElement, "showDropdown", {}), this
                }
            }, {
                key: "hideDropdown",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                        t = this.containerOuter.classList.contains(this.config.classNames.flippedState);
                    return this.containerOuter.classList.remove(this.config.classNames.openState), this.containerOuter.setAttribute("aria-expanded", "false"), this.dropdown.classList.remove(this.config.classNames.activeState), this.dropdown.setAttribute("aria-expanded", "false"), t && this.containerOuter.classList.remove(this.config.classNames.flippedState), e && this.canSearch && document.activeElement === this.input && this.input.blur(), (0, y.triggerEvent)(this.passedElement, "hideDropdown", {}), this
                }
            }, {
                key: "toggleDropdown",
                value: function() {
                    return this.dropdown.classList.contains(this.config.classNames.activeState) ? this.hideDropdown() : this.showDropdown(!0), this
                }
            }, {
                key: "getValue",
                value: function() {
                    var t = this,
                        i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                        e = this.store.getItemsFilteredByActive(),
                        n = [];
                    return e.forEach(function(e) {
                        t.isTextElement ? n.push(i ? e.value : e) : e.active && n.push(i ? e.value : e)
                    }), this.isSelectOneElement ? n[0] : n
                }
            }, {
                key: "setValue",
                value: function(e) {
                    var i = this;
                    if (!0 === this.initialised) {
                        var t = [].concat(b(e)),
                            n = function(e) {
                                var t = (0, y.getType)(e);
                                if ("Object" === t) {
                                    if (!e.value) return;
                                    i.isTextElement ? i._addItem(e.value, e.label, e.id, void 0, e.customProperties, e.placeholder) : i._addChoice(e.value, e.label, !0, !1, -1, e.customProperties, e.placeholder)
                                } else "String" === t && (i.isTextElement ? i._addItem(e) : i._addChoice(e, e, !0, !1, -1, null))
                            };
                        1 < t.length ? t.forEach(function(e) {
                            n(e)
                        }) : n(t[0])
                    }
                    return this
                }
            }, {
                key: "setValueByChoice",
                value: function(e) {
                    var i = this;
                    if (!this.isTextElement) {
                        var n = this.store.getChoices();
                        ((0, y.isType)("Array", e) ? e : [e]).forEach(function(t) {
                            var e = n.find(function(e) {
                                return i.config.itemComparer(e.value, t)
                            });
                            e ? e.selected ? i.config.silent || console.warn("Attempting to select choice already selected") : i._addItem(e.value, e.label, e.id, e.groupId, e.customProperties, e.placeholder, e.keyCode) : i.config.silent || console.warn("Attempting to select choice that does not exist")
                        })
                    }
                    return this
                }
            }, {
                key: "setChoices",
                value: function(e, t, i) {
                    var n = this,
                        s = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                    if (!0 === this.initialised && this.isSelectElement) {
                        if (!(0, y.isType)("Array", e) || !t) return this;
                        s && this._clearChoices(), this._setLoading(!0), e && e.length && (this.containerOuter.classList.remove(this.config.classNames.loadingState), e.forEach(function(e) {
                            e.choices ? n._addGroup(e, e.id || null, t, i) : n._addChoice(e[t], e[i], e.selected, e.disabled, void 0, e.customProperties, e.placeholder)
                        })), this._setLoading(!1)
                    }
                    return this
                }
            }, {
                key: "clearStore",
                value: function() {
                    return this.store.dispatch((0, p.clearAll)()), this
                }
            }, {
                key: "clearInput",
                value: function() {
                    return this.input.value && (this.input.value = ""), this.isSelectOneElement || this._setInputWidth(), !this.isTextElement && this.config.searchEnabled && (this.isSearching = !1, this.store.dispatch((0, p.activateChoices)(!0))), this
                }
            }, {
                key: "enable",
                value: function() {
                    this.initialised && (this.passedElement.disabled = !1, this.containerOuter.classList.contains(this.config.classNames.disabledState) && (this._addEventListeners(), this.passedElement.removeAttribute("disabled"), this.input.removeAttribute("disabled"), this.containerOuter.classList.remove(this.config.classNames.disabledState), this.containerOuter.removeAttribute("aria-disabled"), this.isSelectOneElement && this.containerOuter.setAttribute("tabindex", "0")));
                    return this
                }
            }, {
                key: "disable",
                value: function() {
                    this.initialised && (this.passedElement.disabled = !0, !this.containerOuter.classList.contains(this.config.classNames.disabledState) && (this._removeEventListeners(), this.passedElement.setAttribute("disabled", ""), this.input.setAttribute("disabled", ""), this.containerOuter.classList.add(this.config.classNames.disabledState), this.containerOuter.setAttribute("aria-disabled", "true"), this.isSelectOneElement && this.containerOuter.setAttribute("tabindex", "-1")));
                    return this
                }
            }, {
                key: "ajax",
                value: function(e) {
                    var t = this;
                    return !0 === this.initialised && this.isSelectElement && (requestAnimationFrame(function() {
                        t._handleLoadingState(!0)
                    }), e(this._ajaxCallback())), this
                }
            }, {
                key: "_triggerChange",
                value: function(e) {
                    e && (0, y.triggerEvent)(this.passedElement, "change", {
                        value: e
                    })
                }
            }, {
                key: "_handleButtonAction",
                value: function(e, t) {
                    if (e && t && this.config.removeItems && this.config.removeItemButton) {
                        var i = t.parentNode.getAttribute("data-id"),
                            n = e.find(function(e) {
                                return e.id === parseInt(i, 10)
                            });
                        this._removeItem(n), this._triggerChange(n.value), this.isSelectOneElement && this._selectPlaceholderChoice()
                    }
                }
            }, {
                key: "_selectPlaceholderChoice",
                value: function() {
                    var e = this.store.getPlaceholderChoice();
                    e && (this._addItem(e.value, e.label, e.id, e.groupId, null, e.placeholder), this._triggerChange(e.value))
                }
            }, {
                key: "_handleItemAction",
                value: function(e, t) {
                    var i = this,
                        n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    if (e && t && this.config.removeItems && !this.isSelectOneElement) {
                        var s = t.getAttribute("data-id");
                        e.forEach(function(e) {
                            e.id !== parseInt(s, 10) || e.highlighted ? n || e.highlighted && i.unhighlightItem(e) : i.highlightItem(e)
                        }), document.activeElement !== this.input && this.input.focus()
                    }
                }
            }, {
                key: "_handleChoiceAction",
                value: function(e, t) {
                    if (e && t) {
                        var i = t.getAttribute("data-id"),
                            n = this.store.getChoiceById(i),
                            s = (e[0] && e[0].keyCode && e[0].keyCode, this.dropdown.classList.contains(this.config.classNames.activeState)),
                            o = document.getElementById("addressRequest"),
                            r = document.querySelector("div[data-id='" + i + "']");
                        if (o.value = r.getAttribute("data-value"), (0, y.triggerEvent)(this.passedElement, "choice", {
                                choice: n
                            }), n && !n.selected && !n.disabled) this._canAddItem(e, n.value).response && (this._addItem(n.value, n.label, n.id, n.groupId, n.customProperties, n.placeholder, n.keyCode), this._triggerChange(n.value));
                        this.clearInput(), s && this.isSelectOneElement && (this.hideDropdown(), this.containerOuter.focus()), fromSearch = !1, addrex = r.getAttribute("data-value"), mainProcess(fromSearch)
                    }
                }
            }, {
                key: "_handleBackspace",
                value: function(e) {
                    if (this.config.removeItems && e) {
                        var t = e[e.length - 1],
                            i = e.some(function(e) {
                                return e.highlighted
                            });
                        this.config.editItems && !i && t ? (this.input.value = t.value, this._setInputWidth(), this._removeItem(t), this._triggerChange(t.value)) : (i || this.highlightItem(t, !1), this.removeHighlightedItems(!0))
                    }
                }
            }, {
                key: "_canAddItem",
                value: function(e, t) {
                    var i = !0,
                        n = (0, y.isType)("Function", this.config.addItemText) ? this.config.addItemText(t) : this.config.addItemText;
                    return (this.isSelectMultipleElement || this.isTextElement) && 0 < this.config.maxItemCount && this.config.maxItemCount <= e.length && (i = !1, n = (0, y.isType)("Function", this.config.maxItemText) ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText), this.isTextElement && this.config.addItems && i && this.config.regexFilter && (i = this._regexFilter(t)), !e.some(function(e) {
                        return (0, y.isType)("String", t) ? e.value === t.trim() : e.value === t
                    }) || this.config.duplicateItems || this.isSelectOneElement || !i || (i = !1, n = (0, y.isType)("Function", this.config.uniqueItemText) ? this.config.uniqueItemText(t) : this.config.uniqueItemText), {
                        response: i,
                        notice: n
                    }
                }
            }, {
                key: "_handleLoadingState",
                value: function() {
                    var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                        t = this.itemList.querySelector("." + this.config.classNames.placeholder);
                    e ? (this.containerOuter.classList.add(this.config.classNames.loadingState), this.containerOuter.setAttribute("aria-busy", "true"), this.isSelectOneElement ? t ? t.innerHTML = this.config.loadingText : (t = this._getTemplate("placeholder", this.config.loadingText), this.itemList.appendChild(t)) : this.input.placeholder = this.config.loadingText) : (this.containerOuter.classList.remove(this.config.classNames.loadingState), this.isSelectOneElement ? t.innerHTML = this.placeholder || "" : this.input.placeholder = this.placeholder || "")
                }
            }, {
                key: "_ajaxCallback",
                value: function() {
                    var s = this;
                    return function(e, i, n) {
                        if (e && i) {
                            var t = (0, y.isType)("Object", e) ? [e] : e;
                            t && (0, y.isType)("Array", t) && t.length ? (s._handleLoadingState(!1), s._setLoading(!0), t.forEach(function(e) {
                                if (e.choices) {
                                    var t = e.id || null;
                                    s._addGroup(e, t, i, n)
                                } else s._addChoice(e[i], e[n], e.selected, e.disabled, void 0, e.customProperties, e.placeholder)
                            }), s._setLoading(!1), s.isSelectOneElement && s._selectPlaceholderChoice()) : s._handleLoadingState(!1), s.containerOuter.removeAttribute("aria-busy")
                        }
                    }
                }
            }, {
                key: "_searchChoices",
                value: function(e) {
                    var t = (0, y.isType)("String", e) ? e.trim() : e,
                        i = (0, y.isType)("String", this.currentValue) ? this.currentValue.trim() : this.currentValue;
                    if (1 <= t.length && t !== i + " ") {
                        var n = this.store.getSearchableChoices(),
                            s = t,
                            o = (0, y.isType)("Array", this.config.searchFields) ? this.config.searchFields : [this.config.searchFields],
                            r = Object.assign(this.config.fuseOptions, {
                                keys: o
                            }),
                            a = new c.default(n, r).search(s);
                        return this.currentValue = t, this.highlightPosition = 0, this.isSearching = !0, this.store.dispatch((0, p.filterChoices)(a)), a.length
                    }
                    return 0
                }
            }, {
                key: "_handleSearch",
                value: function(e) {
                    if (e) {
                        var t = this.store.getChoices().some(function(e) {
                            return !e.active
                        });
                        if (this.input === document.activeElement)
                            if (e && e.length >= this.config.searchFloor) {
                                var i = 0;
                                this.config.searchChoices && (i = this._searchChoices(e)), (0, y.triggerEvent)(this.passedElement, "search", {
                                    value: e,
                                    resultCount: i
                                })
                            } else t && (this.isSearching = !1, this.store.dispatch((0, p.activateChoices)(!0)))
                    }
                }
            }, {
                key: "_addEventListeners",
                value: function() {
                    document.addEventListener("keyup", this._onKeyUp), document.addEventListener("keydown", this._onKeyDown), document.addEventListener("click", this._onClick), document.addEventListener("touchmove", this._onTouchMove), document.addEventListener("touchend", this._onTouchEnd), document.addEventListener("mousedown", this._onMouseDown), document.addEventListener("mouseover", this._onMouseOver), this.isSelectOneElement && (this.containerOuter.addEventListener("focus", this._onFocus), this.containerOuter.addEventListener("blur", this._onBlur)), this.input.addEventListener("input", this._onInput), this.input.addEventListener("paste", this._onPaste), this.input.addEventListener("focus", this._onFocus), this.input.addEventListener("blur", this._onBlur)
                }
            }, {
                key: "_removeEventListeners",
                value: function() {
                    document.removeEventListener("keyup", this._onKeyUp), document.removeEventListener("keydown", this._onKeyDown), document.removeEventListener("click", this._onClick), document.removeEventListener("touchmove", this._onTouchMove), document.removeEventListener("touchend", this._onTouchEnd), document.removeEventListener("mousedown", this._onMouseDown), document.removeEventListener("mouseover", this._onMouseOver), this.isSelectOneElement && (this.containerOuter.removeEventListener("focus", this._onFocus), this.containerOuter.removeEventListener("blur", this._onBlur)), this.input.removeEventListener("input", this._onInput), this.input.removeEventListener("paste", this._onPaste), this.input.removeEventListener("focus", this._onFocus), this.input.removeEventListener("blur", this._onBlur)
                }
            }, {
                key: "_setInputWidth",
                value: function() {
                    this.placeholder ? this.input.value && this.input.value.length >= this.placeholder.length / 1.25 && (this.input.style.width = (0, y.getWidthOfInput)(this.input)) : this.input.style.width = (0, y.getWidthOfInput)(this.input)
                }
            }, {
                key: "_onKeyDown",
                value: function(n) {
                    var e, s = this;
                    if (n.target === this.input || this.containerOuter.contains(n.target)) {
                        var i = n.target,
                            o = this.store.getItemsFilteredByActive(),
                            t = this.input === document.activeElement,
                            r = this.dropdown.classList.contains(this.config.classNames.activeState),
                            a = this.itemList && this.itemList.children,
                            c = String.fromCharCode(n.keyCode),
                            l = n.ctrlKey || n.metaKey;
                        this.isTextElement || !/[a-zA-Z0-9-_ ]/.test(c) || r || this.showDropdown(!0), this.canSearch = this.config.searchEnabled;
                        var h = function() {
                                if (r || s.isSelectOneElement) {
                                    r || s.showDropdown(!0), s.canSearch = !1;
                                    var e = 40 === n.keyCode || 34 === n.keyCode ? 1 : -1,
                                        t = void 0;
                                    if (n.metaKey || 34 === n.keyCode || 33 === n.keyCode) t = 0 < e ? Array.from(s.dropdown.querySelectorAll("[data-choice-selectable]")).pop() : s.dropdown.querySelector("[data-choice-selectable]");
                                    else {
                                        var i = s.dropdown.querySelector("." + s.config.classNames.highlightedState);
                                        t = i ? (0, y.getAdjacentEl)(i, "[data-choice-selectable]", e) : s.dropdown.querySelector("[data-choice-selectable]")
                                    }
                                    t && ((0, y.isScrolledIntoView)(t, s.choiceList, e) || s._scrollToChoice(t, e), s._highlightChoice(t)), n.preventDefault()
                                }
                            },
                            u = function() {
                                !t || n.target.value || s.isSelectOneElement || (s._handleBackspace(o), n.preventDefault())
                            },
                            d = (f(e = {}, 65, function() {
                                l && a && (s.canSearch = !1, s.config.removeItems && !s.input.value && s.input === document.activeElement && s.highlightAll())
                            }), f(e, 13, function() {
                                if (s.isTextElement && i.value) {
                                    var e = s.input.value;
                                    s._canAddItem(o, e).response && (r && s.hideDropdown(), s._addItem(e), s._triggerChange(e), s.clearInput())
                                }
                                if (i.hasAttribute("data-button") && (s._handleButtonAction(o, i), n.preventDefault()), r) {
                                    n.preventDefault();
                                    var t = s.dropdown.querySelector("." + s.config.classNames.highlightedState);
                                    t && (o[0] && (o[0].keyCode = 13), s._handleChoiceAction(o, t))
                                } else s.isSelectOneElement && (r || (s.showDropdown(!0), n.preventDefault()))
                            }), f(e, 27, function() {
                                r && (s.toggleDropdown(), s.containerOuter.focus())
                            }), f(e, 38, h), f(e, 33, h), f(e, 40, h), f(e, 34, h), f(e, 8, u), f(e, 46, u), e);
                        d[n.keyCode] && d[n.keyCode]()
                    }
                }
            }, {
                key: "_onKeyUp",
                value: function(e) {
                    if (e.target === this.input) {
                        var t = this.input.value,
                            i = this.store.getItemsFilteredByActive(),
                            n = this._canAddItem(i, t);
                        if (this.isTextElement) {
                            var s = this.dropdown.classList.contains(this.config.classNames.activeState);
                            if (t) {
                                if (n.notice) {
                                    var o = this._getTemplate("notice", n.notice);
                                    this.dropdown.innerHTML = o.outerHTML
                                }!0 === n.response ? s || this.showDropdown() : !n.notice && s && this.hideDropdown()
                            } else s && this.hideDropdown()
                        } else {
                            46 !== e.keyCode && 8 !== e.keyCode || e.target.value ? this.canSearch && n.response && this._handleSearch(this.input.value) : !this.isTextElement && this.isSearching && (this.isSearching = !1, this.store.dispatch((0, p.activateChoices)(!0)))
                        }
                        this.canSearch = this.config.searchEnabled
                    }
                }
            }, {
                key: "_onInput",
                value: function() {
                    this.isSelectOneElement || this._setInputWidth()
                }
            }, {
                key: "_onTouchMove",
                value: function() {
                    !0 === this.wasTap && (this.wasTap = !1)
                }
            }, {
                key: "_onTouchEnd",
                value: function(e) {
                    var t = e.target || e.touches[0].target,
                        i = this.dropdown.classList.contains(this.config.classNames.activeState);
                    !0 === this.wasTap && this.containerOuter.contains(t) && (t !== this.containerOuter && t !== this.containerInner || this.isSelectOneElement || (this.isTextElement ? document.activeElement !== this.input && this.input.focus() : i || this.showDropdown(!0)), e.stopPropagation()), this.wasTap = !0
                }
            }, {
                key: "_onMouseDown",
                value: function(e) {
                    var t = e.target;
                    if (t === this.choiceList && this.isIe11 && (this.isScrollingOnIe = !0), this.containerOuter.contains(t) && t !== this.input) {
                        var i = void 0,
                            n = this.store.getItemsFilteredByActive(),
                            s = e.shiftKey;
                        (i = (0, y.findAncestorByAttrName)(t, "data-button")) ? this._handleButtonAction(n, i): (i = (0, y.findAncestorByAttrName)(t, "data-item")) ? this._handleItemAction(n, i, s) : (i = (0, y.findAncestorByAttrName)(t, "data-choice")) && this._handleChoiceAction(n, i), e.preventDefault()
                    }
                }
            }, {
                key: "_onClick",
                value: function(e) {
                    var t = e.target,
                        i = this.dropdown.classList.contains(this.config.classNames.activeState),
                        n = this.store.getItemsFilteredByActive();
                    this.containerOuter.contains(t) ? (t.hasAttribute("data-button") && this._handleButtonAction(n, t), i ? this.isSelectOneElement && t !== this.input && !this.dropdown.contains(t) && this.hideDropdown(!0) : this.isTextElement ? document.activeElement !== this.input && this.input.focus() : this.canSearch ? this.showDropdown(!0) : (this.showDropdown(), this.containerOuter.focus())) : (n.some(function(e) {
                        return e.highlighted
                    }) && this.unhighlightAll(), this.containerOuter.classList.remove(this.config.classNames.focusState), i && this.hideDropdown())
                }
            }, {
                key: "_onMouseOver",
                value: function(e) {
                    (e.target === this.dropdown || this.dropdown.contains(e.target)) && e.target.hasAttribute("data-choice") && this._highlightChoice(e.target)
                }
            }, {
                key: "_onPaste",
                value: function(e) {
                    e.target !== this.input || this.config.paste || e.preventDefault()
                }
            }, {
                key: "_onFocus",
                value: function(e) {
                    var t = this,
                        i = e.target;
                    if (this.containerOuter.contains(i)) {
                        var n = this.dropdown.classList.contains(this.config.classNames.activeState);
                        ({
                            text: function() {
                                i === t.input && t.containerOuter.classList.add(t.config.classNames.focusState)
                            },
                            "select-one": function() {
                                t.containerOuter.classList.add(t.config.classNames.focusState), i === t.input && (n || t.showDropdown())
                            },
                            "select-multiple": function() {
                                i === t.input && (t.containerOuter.classList.add(t.config.classNames.focusState), n || t.showDropdown(!0))
                            }
                        })[this.passedElement.type]()
                    }
                }
            }, {
                key: "_onBlur",
                value: function(e) {
                    var t = this,
                        i = e.target;
                    if (this.containerOuter.contains(i) && !this.isScrollingOnIe) {
                        var n = this.store.getItemsFilteredByActive(),
                            s = this.dropdown.classList.contains(this.config.classNames.activeState),
                            o = n.some(function(e) {
                                return e.highlighted
                            });
                        ({
                            text: function() {
                                i === t.input && (t.containerOuter.classList.remove(t.config.classNames.focusState), o && t.unhighlightAll(), s && t.hideDropdown())
                            },
                            "select-one": function() {
                                t.containerOuter.classList.remove(t.config.classNames.focusState), i === t.containerOuter && s && !t.canSearch && t.hideDropdown(), i === t.input && s && t.hideDropdown()
                            },
                            "select-multiple": function() {
                                i === t.input && (t.containerOuter.classList.remove(t.config.classNames.focusState), s && t.hideDropdown(), o && t.unhighlightAll())
                            }
                        })[this.passedElement.type]()
                    } else this.isScrollingOnIe = !1, this.input.focus()
                }
            }, {
                key: "_regexFilter",
                value: function(e) {
                    if (!e) return !1;
                    var t = this.config.regexFilter;
                    return new RegExp(t.source, "i").test(e)
                }
            }, {
                key: "_scrollToChoice",
                value: function(e, o) {
                    var r = this;
                    if (e) {
                        var t = this.choiceList.offsetHeight,
                            i = e.offsetHeight,
                            n = e.offsetTop + i,
                            s = this.choiceList.scrollTop + t,
                            a = 0 < o ? this.choiceList.scrollTop + n - s : e.offsetTop;
                        requestAnimationFrame(function(e) {
                            ! function t() {
                                var e = r.choiceList.scrollTop,
                                    i = !1,
                                    n = void 0,
                                    s = void 0;
                                0 < o ? (s = 1 < (n = (a - e) / 4) ? n : 1, r.choiceList.scrollTop = e + s, e < a && (i = !0)) : (s = 1 < (n = (e - a) / 4) ? n : 1, r.choiceList.scrollTop = e - s, a < e && (i = !0)), i && requestAnimationFrame(function(e) {
                                    t()
                                })
                            }()
                        })
                    }
                }
            }, {
                key: "_highlightChoice",
                value: function() {
                    var t = this,
                        e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                        i = Array.from(this.dropdown.querySelectorAll("[data-choice-selectable]")),
                        n = e;
                    i && i.length && (Array.from(this.dropdown.querySelectorAll("." + this.config.classNames.highlightedState)).forEach(function(e) {
                        e.classList.remove(t.config.classNames.highlightedState), e.setAttribute("aria-selected", "false")
                    }), n ? this.highlightPosition = i.indexOf(n) : (n = i.length > this.highlightPosition ? i[this.highlightPosition] : i[i.length - 1]) || (n = i[0]), n.classList.add(this.config.classNames.highlightedState), n.setAttribute("aria-selected", "true"), this.containerOuter.setAttribute("aria-activedescendant", n.id))
                }
            }, {
                key: "_addItem",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : -1,
                        n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : -1,
                        s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null,
                        o = 5 < arguments.length && void 0 !== arguments[5] && arguments[5],
                        r = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : null,
                        a = (0, y.isType)("String", e) ? e.trim() : e,
                        c = r,
                        l = this.store.getItems(),
                        h = t || a,
                        u = parseInt(i, 10) || -1,
                        d = 0 <= n ? this.store.getGroupById(n) : null,
                        f = l ? l.length + 1 : 1;
                    return this.config.prependValue && (a = this.config.prependValue + a.toString()), this.config.appendValue && (a += this.config.appendValue.toString()), this.store.dispatch((0, p.addItem)(a, h, f, u, n, s, o, c)), this.isSelectOneElement && this.removeActiveItems(f), d && d.value ? (0, y.triggerEvent)(this.passedElement, "addItem", {
                        id: f,
                        value: a,
                        label: h,
                        groupValue: d.value,
                        keyCode: c
                    }) : (0, y.triggerEvent)(this.passedElement, "addItem", {
                        id: f,
                        value: a,
                        label: h,
                        keyCode: c
                    }), this
                }
            }, {
                key: "_removeItem",
                value: function(e) {
                    if (!e || !(0, y.isType)("Object", e)) return this;
                    var t = e.id,
                        i = e.value,
                        n = e.label,
                        s = e.choiceId,
                        o = e.groupId,
                        r = 0 <= o ? this.store.getGroupById(o) : null;
                    return this.store.dispatch((0, p.removeItem)(t, s)), r && r.value ? (0, y.triggerEvent)(this.passedElement, "removeItem", {
                        id: t,
                        value: i,
                        label: n,
                        groupValue: r.value
                    }) : (0, y.triggerEvent)(this.passedElement, "removeItem", {
                        id: t,
                        value: i,
                        label: n
                    }), this
                }
            }, {
                key: "_addChoice",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                        n = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
                        s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : -1,
                        o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : null,
                        r = 6 < arguments.length && void 0 !== arguments[6] && arguments[6],
                        a = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : null;
                    if (null != e) {
                        var c = this.store.getChoices(),
                            l = t || e,
                            h = c ? c.length + 1 : 1,
                            u = this.baseId + "-" + this.idNames.itemChoice + "-" + h;
                        this.store.dispatch((0, p.addChoice)(e, l, h, s, n, u, o, r, a)), i && this._addItem(e, l, h, void 0, o, r, a)
                    }
                }
            }, {
                key: "_clearChoices",
                value: function() {
                    this.store.dispatch((0, p.clearChoices)())
                }
            }, {
                key: "_addGroup",
                value: function(e, t) {
                    var i = this,
                        n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "value",
                        s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "label",
                        o = (0, y.isType)("Object", e) ? e.choices : Array.from(e.getElementsByTagName("OPTION")),
                        r = t || Math.floor((new Date).valueOf() * Math.random()),
                        a = !!e.disabled && e.disabled;
                    o ? (this.store.dispatch((0, p.addGroup)(e.label, r, !0, a)), o.forEach(function(e) {
                        var t = e.disabled || e.parentNode && e.parentNode.disabled;
                        i._addChoice(e[n], (0, y.isType)("Object", e) ? e[s] : e.innerHTML, e.selected, t, r, e.customProperties, e.placeholder)
                    })) : this.store.dispatch((0, p.addGroup)(e.label, e.id, !1, e.disabled))
                }
            }, {
                key: "_getTemplate",
                value: function(e) {
                    if (!e) return null;
                    for (var t = this.config.templates, i = arguments.length, n = Array(1 < i ? i - 1 : 0), s = 1; s < i; s++) n[s - 1] = arguments[s];
                    return t[e].apply(t, n)
                }
            }, {
                key: "_createTemplates",
                value: function() {
                    var s = this,
                        o = this.config.classNames,
                        e = {
                            containerOuter: function(e) {
                                return (0, y.strToEl)('\n          <div\n            class="' + o.containerOuter + '"\n            ' + (s.isSelectElement ? s.config.searchEnabled ? 'role="combobox" aria-autocomplete="list"' : 'role="listbox"' : "") + '\n            data-type="' + s.passedElement.type + '"\n            ' + (s.isSelectOneElement ? 'tabindex="0"' : "") + '\n            aria-haspopup="true"\n            aria-expanded="false"\n            dir="' + e + '"\n            >\n          </div>\n        ')
                            },
                            containerInner: function() {
                                return (0, y.strToEl)('\n          <div class="' + o.containerInner + '"></div>\n        ')
                            },
                            itemList: function() {
                                var e, t = (0, r.default)(o.list, (f(e = {}, o.listSingle, s.isSelectOneElement), f(e, o.listItems, !s.isSelectOneElement), e));
                                return (0, y.strToEl)('\n          <div class="' + t + '"></div>\n        ')
                            },
                            placeholder: function(e) {
                                return (0, y.strToEl)('\n          <div class="' + o.placeholder + '">\n            ' + e + "\n          </div>\n        ")
                            },
                            item: function(e) {
                                var t, i, n = (0, r.default)(o.item, (f(t = {}, o.highlightedState, e.highlighted), f(t, o.itemSelectable, !e.highlighted), f(t, o.placeholder, e.placeholder), t));
                                return s.config.removeItemButton ? (n = (0, r.default)(o.item, (f(i = {}, o.highlightedState, e.highlighted), f(i, o.itemSelectable, !e.disabled), f(i, o.placeholder, e.placeholder), i)), (0, y.strToEl)('\n            <div\n              class="' + n + '"\n              data-item\n              data-id="' + e.id + '"\n              data-value="' + e.value + '"\n              data-deletable\n              ' + (e.active ? 'aria-selected="true"' : "") + "\n              " + (e.disabled ? 'aria-disabled="true"' : "") + "\n              >\n              " + e.label + '\x3c!--\n           --\x3e<button\n                type="button"\n                class="' + o.button + '"\n                data-button\n                aria-label="Remove item: \'' + e.value + "'\"\n                >\n                Remove item\n              </button>\n            </div>\n          ")) : (0, y.strToEl)('\n          <div\n            class="' + n + '"\n            data-item\n            data-id="' + e.id + '"\n            data-value="' + e.value + '"\n            ' + (e.active ? 'aria-selected="true"' : "") + "\n            " + (e.disabled ? 'aria-disabled="true"' : "") + "\n            >\n            " + e.label + "\n          </div>\n        ")
                            },
                            choiceList: function() {
                                return (0, y.strToEl)('\n          <div\n            class="' + o.list + '"\n            dir="ltr"\n            role="listbox"\n            ' + (s.isSelectOneElement ? "" : 'aria-multiselectable="true"') + "\n            >\n          </div>\n        ")
                            },
                            choiceGroup: function(e) {
                                var t = (0, r.default)(o.group, f({}, o.itemDisabled, e.disabled));
                                return (0, y.strToEl)('\n          <div\n            class="' + t + '"\n            data-group\n            data-id="' + e.id + '"\n            data-value="' + e.value + '"\n            role="group"\n            ' + (e.disabled ? 'aria-disabled="true"' : "") + '\n            >\n            <div class="' + o.groupHeading + '">' + e.value + "</div>\n          </div>\n        ")
                            },
                            choice: function(e) {
                                var t, i = (0, r.default)(o.item, o.itemChoice, (f(t = {}, o.itemDisabled, e.disabled), f(t, o.itemSelectable, !e.disabled), f(t, o.placeholder, e.placeholder), t));
                                return (0, y.strToEl)('\n          <div\n            class="' + i + '"\n            data-select-text="' + s.config.itemSelectText + '"\n            data-choice\n            data-id="' + e.id + '"\n            data-value="' + e.value + '"\n            ' + (e.disabled ? 'data-choice-disabled aria-disabled="true"' : "data-choice-selectable") + '\n            id="' + e.elementId + '"\n            ' + (0 < e.groupId ? 'role="treeitem"' : 'role="option"') + "\n            >\n            " + e.label + "\n          </div>\n        ")
                            },
                            input: function() {
                                var e = (0, r.default)(o.input, o.inputCloned);
                                return (0, y.strToEl)('\n          <input\n            type="text"\n            class="' + e + '"\n            autocomplete="off"\n            autocapitalize="off"\n            spellcheck="false"\n            role="textbox"\n            aria-autocomplete="list"\n            >\n        ')
                            },
                            dropdown: function() {
                                var e = (0, r.default)(o.list, o.listDropdown);
                                return (0, y.strToEl)('\n          <div\n            class="' + e + '"\n            aria-expanded="false"\n            >\n          </div>\n        ')
                            },
                            notice: function(e) {
                                var t, i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                                    n = (0, r.default)(o.item, o.itemChoice, (f(t = {}, o.noResults, "no-results" === i), f(t, o.noChoices, "no-choices" === i), t));
                                return (0, y.strToEl)('\n          <div class="' + n + '">\n            ' + e + "\n          </div>\n        ")
                            },
                            option: function(e) {
                                return (0, y.strToEl)('\n          <option value="' + e.value + '" selected>' + e.label + "</option>\n        ")
                            }
                        },
                        t = this.config.callbackOnCreateTemplates,
                        i = {};
                    t && (0, y.isType)("Function", t) && (i = t.call(this, y.strToEl)), this.config.templates = (0, y.extend)(e, i)
                }
            }, {
                key: "_setLoading",
                value: function(e) {
                    this.store.dispatch((0, p.setIsLoading)(e))
                }
            }, {
                key: "_createInput",
                value: function() {
                    var n = this,
                        e = this.passedElement.getAttribute("dir") || "ltr",
                        t = this._getTemplate("containerOuter", e),
                        i = this._getTemplate("containerInner"),
                        s = this._getTemplate("itemList"),
                        o = this._getTemplate("choiceList"),
                        r = this._getTemplate("input"),
                        a = this._getTemplate("dropdown");
                    this.containerOuter = t, this.containerInner = i, this.input = r, this.choiceList = o, this.itemList = s, this.dropdown = a, this.passedElement.classList.add(this.config.classNames.input, this.config.classNames.hiddenState), this.passedElement.tabIndex = "-1";
                    var c = this.passedElement.getAttribute("style");
                    if (Boolean(c) && this.passedElement.setAttribute("data-choice-orig-style", c), this.passedElement.setAttribute("style", "display:none;"), this.passedElement.setAttribute("aria-hidden", "true"), this.passedElement.setAttribute("data-choice", "active"), (0, y.wrap)(this.passedElement, i), (0, y.wrap)(i, t), this.isSelectOneElement ? r.placeholder = this.config.searchPlaceholderValue || "" : this.placeholder && (r.placeholder = this.placeholder, r.style.width = (0, y.getWidthOfInput)(r)), this.config.addItems || this.disable(), t.appendChild(i), t.appendChild(a), i.appendChild(s), this.isTextElement || a.appendChild(o), this.isSelectMultipleElement || this.isTextElement ? i.appendChild(r) : this.canSearch && a.insertBefore(r, a.firstChild), this.isSelectElement) {
                        var l = Array.from(this.passedElement.getElementsByTagName("OPTGROUP"));
                        if (this.highlightPosition = 0, this.isSearching = !1, this._setLoading(!0), l && l.length) l.forEach(function(e) {
                            n._addGroup(e, e.id || null)
                        });
                        else {
                            var h = Array.from(this.passedElement.options),
                                u = this.config.sortFilter,
                                d = this.presetChoices;
                            h.forEach(function(e) {
                                d.push({
                                    value: e.value,
                                    label: e.innerHTML,
                                    selected: e.selected,
                                    disabled: e.disabled || e.parentNode.disabled,
                                    placeholder: e.hasAttribute("placeholder")
                                })
                            }), this.config.shouldSort && d.sort(u);
                            var f = d.some(function(e) {
                                return e.selected
                            });
                            d.forEach(function(e, t) {
                                if (n.isSelectOneElement) {
                                    var i = f || !f && 0 < t;
                                    n._addChoice(e.value, e.label, !i || e.selected, !!i && e.disabled, void 0, e.customProperties, e.placeholder)
                                } else n._addChoice(e.value, e.label, e.selected, e.disabled, void 0, e.customProperties, e.placeholder)
                            })
                        }
                        this._setLoading(!1)
                    } else this.isTextElement && this.presetItems.forEach(function(e) {
                        var t = (0, y.getType)(e);
                        if ("Object" === t) {
                            if (!e.value) return;
                            n._addItem(e.value, e.label, e.id, void 0, e.customProperties, e.placeholder)
                        } else "String" === t && n._addItem(e)
                    })
                }
            }]), o
        }();
        e.exports = o
    }, function(s, e, t) {
        ! function(e) {
            "use strict";

            function I() {
                console.log.apply(console, arguments)
            }
            var n = {
                id: null,
                caseSensitive: !1,
                include: [],
                shouldSort: !0,
                searchFn: i,
                sortFn: function(e, t) {
                    return e.score - t.score
                },
                getFn: function e(t, i, n) {
                    var s;
                    var o;
                    var r;
                    var a;
                    var c;
                    var l;
                    if (i) {
                        if (-1 !== (r = i.indexOf(".")) ? (s = i.slice(0, r), o = i.slice(r + 1)) : s = i, null != (a = t[s]))
                            if (o || "string" != typeof a && "number" != typeof a)
                                if (w(a))
                                    for (c = 0, l = a.length; c < l; c++) e(a[c], o, n);
                                else o && e(a, o, n);
                        else n.push(a)
                    } else n.push(t);
                    return n
                },
                keys: [],
                verbose: !1,
                tokenize: !1,
                matchAllTokens: !1,
                tokenSeparator: / +/g,
                minMatchCharLength: 1,
                findAllMatches: !1
            };

            function t(e, t) {
                var i;
                for (i in this.list = e, this.options = t = t || {}, n) n.hasOwnProperty(i) && ("boolean" == typeof n[i] ? this.options[i] = i in t ? t[i] : n[i] : this.options[i] = t[i] || n[i])
            }

            function w(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }

            function i(e, t) {
                t = t || {}, this.options = t, this.options.location = t.location || i.defaultOptions.location, this.options.distance = "distance" in t ? t.distance : i.defaultOptions.distance, this.options.threshold = "threshold" in t ? t.threshold : i.defaultOptions.threshold, this.options.maxPatternLength = t.maxPatternLength || i.defaultOptions.maxPatternLength, this.pattern = t.caseSensitive ? e : e.toLowerCase(), this.patternLen = e.length, this.patternLen <= this.options.maxPatternLength && (this.matchmask = 1 << this.patternLen - 1, this.patternAlphabet = this._calculatePatternAlphabet())
            }
            t.VERSION = "2.7.3", t.prototype.set = function(e) {
                return this.list = e
            }, t.prototype.search = function(e) {
                return this.options.verbose && I("\nSearch term:", e, "\n"), this.pattern = e, this.results = [], this.resultMap = {}, this._keyMap = null, this._prepareSearchers(), this._startSearch(), this._computeScore(), this._sort(), this._format()
            }, t.prototype._prepareSearchers = function() {
                var e = this.options,
                    t = this.pattern,
                    i = e.searchFn,
                    n = t.split(e.tokenSeparator),
                    s = 0,
                    o = n.length;
                if (this.options.tokenize)
                    for (this.tokenSearchers = []; s < o; s++) this.tokenSearchers.push(new i(n[s], e));
                this.fullSeacher = new i(t, e)
            }, t.prototype._startSearch = function() {
                var e, t, i, n, s = this.options.getFn,
                    o = this.list,
                    r = o.length,
                    a = this.options.keys,
                    c = a.length,
                    l = null;
                if ("string" == typeof o[0])
                    for (i = 0; i < r; i++) this._analyze("", o[i], i, i);
                else
                    for (this._keyMap = {}, i = 0; i < r; i++)
                        for (l = o[i], n = 0; n < c; n++) {
                            if ("string" != typeof(e = a[n])) {
                                if (t = 1 - e.weight || 1, this._keyMap[e.name] = {
                                        weight: t
                                    }, e.weight <= 0 || 1 < e.weight) throw new Error("Key weight has to be > 0 and <= 1");
                                e = e.name
                            } else this._keyMap[e] = {
                                weight: 1
                            };
                            this._analyze(e, s(l, e, []), l, i)
                        }
            }, t.prototype._analyze = function(e, t, i, n) {
                var s, o, r, a, c, l, h, u, d, f, p, v, m, g, y, b = this.options,
                    E = !1;
                if (null != t) {
                    o = [];
                    var _ = 0;
                    if ("string" == typeof t) {
                        if (s = t.split(b.tokenSeparator), b.verbose && I("---------\nKey:", e), this.options.tokenize) {
                            for (g = 0; g < this.tokenSearchers.length; g++) {
                                for (u = this.tokenSearchers[g], b.verbose && I("Pattern:", u.pattern), v = !(d = []), y = 0; y < s.length; y++) {
                                    f = s[y];
                                    var S = {};
                                    (p = u.search(f)).isMatch ? (S[f] = p.score, v = E = !0, o.push(p.score)) : (S[f] = 1, this.options.matchAllTokens || o.push(1)), d.push(S)
                                }
                                v && _++, b.verbose && I("Token scores:", d)
                            }
                            for (a = o[0], l = o.length, g = 1; g < l; g++) a += o[g];
                            a /= l, b.verbose && I("Token score average:", a)
                        }
                        h = this.fullSeacher.search(t), b.verbose && I("Full text score:", h.score), c = h.score, void 0 !== a && (c = (c + a) / 2), b.verbose && I("Score average:", c), m = !this.options.tokenize || !this.options.matchAllTokens || _ >= this.tokenSearchers.length, b.verbose && I("Check Matches", m), (E || h.isMatch) && m && ((r = this.resultMap[n]) ? r.output.push({
                            key: e,
                            score: c,
                            matchedIndices: h.matchedIndices
                        }) : (this.resultMap[n] = {
                            item: i,
                            output: [{
                                key: e,
                                score: c,
                                matchedIndices: h.matchedIndices
                            }]
                        }, this.results.push(this.resultMap[n])))
                    } else if (w(t))
                        for (g = 0; g < t.length; g++) this._analyze(e, t[g], i, n)
                }
            }, t.prototype._computeScore = function() {
                var e, t, i, n, s, o, r, a, c = this._keyMap,
                    l = this.results;
                for (this.options.verbose && I("\n\nComputing score:\n"), e = 0; e < l.length; e++) {
                    for (i = 0, s = (n = l[e].output).length, r = 1, t = 0; t < s; t++) a = n[t].score * (o = c ? c[n[t].key].weight : 1), 1 !== o ? r = Math.min(r, a) : (i += a, n[t].nScore = a);
                    l[e].score = 1 === r ? i / s : r, this.options.verbose && I(l[e])
                }
            }, t.prototype._sort = function() {
                var e = this.options;
                e.shouldSort && (e.verbose && I("\n\nSorting...."), this.results.sort(e.sortFn))
            }, t.prototype._format = function() {
                var e, t, i, n, s = this.options,
                    o = s.getFn,
                    r = [],
                    a = this.results,
                    c = s.include;
                for (s.verbose && I("\n\nOutput:\n\n", a), i = s.id ? function(e) {
                        a[e].item = o(a[e].item, s.id, [])[0]
                    } : function() {}, n = function(e) {
                        var t, i, n, s, o, r = a[e];
                        if (0 < c.length) {
                            if (t = {
                                    item: r.item
                                }, -1 !== c.indexOf("matches"))
                                for (n = r.output, t.matches = [], i = 0; i < n.length; i++) o = {
                                    indices: (s = n[i]).matchedIndices
                                }, s.key && (o.key = s.key), t.matches.push(o); - 1 !== c.indexOf("score") && (t.score = a[e].score)
                        } else t = r.item;
                        return t
                    }, e = 0, t = a.length; e < t; e++) i(e), r.push(n(e));
                return r
            }, i.defaultOptions = {
                location: 0,
                distance: 100,
                threshold: .6,
                maxPatternLength: 32
            }, i.prototype._calculatePatternAlphabet = function() {
                var e = {},
                    t = 0;
                for (t = 0; t < this.patternLen; t++) e[this.pattern.charAt(t)] = 0;
                for (t = 0; t < this.patternLen; t++) e[this.pattern.charAt(t)] |= 1 << this.pattern.length - t - 1;
                return e
            }, i.prototype._bitapScore = function(e, t) {
                var i = e / this.patternLen,
                    n = Math.abs(this.options.location - t);
                return this.options.distance ? i + n / this.options.distance : n ? 1 : i
            }, i.prototype.search = function(e) {
                var t, i, n, s, o, r, a, c, l, h, u, d, f, p, v, m, g, y, b, E, _, S, I, w = this.options;
                if (e = w.caseSensitive ? e : e.toLowerCase(), this.pattern === e) return {
                    isMatch: !0,
                    score: 0,
                    matchedIndices: [
                        [0, e.length - 1]
                    ]
                };
                if (this.patternLen > w.maxPatternLength) {
                    if (b = !!(y = e.match(new RegExp(this.pattern.replace(w.tokenSeparator, "|")))))
                        for (_ = [], t = 0, S = y.length; t < S; t++) I = y[t], _.push([e.indexOf(I), I.length - 1]);
                    return {
                        isMatch: b,
                        score: b ? .5 : 1,
                        matchedIndices: _
                    }
                }
                for (s = w.findAllMatches, o = w.location, n = e.length, r = w.threshold, a = e.indexOf(this.pattern, o), E = [], t = 0; t < n; t++) E[t] = 0;
                for (-1 != a && (r = Math.min(this._bitapScore(0, a), r), -1 != (a = e.lastIndexOf(this.pattern, o + this.patternLen)) && (r = Math.min(this._bitapScore(0, a), r))), a = -1, m = 1, g = [], h = this.patternLen + n, t = 0; t < this.patternLen; t++) {
                    for (c = 0, l = h; c < l;) this._bitapScore(t, o + l) <= r ? c = l : h = l, l = Math.floor((h - c) / 2 + c);
                    for (h = l, u = Math.max(1, o - l + 1), d = s ? n : Math.min(o + l, n) + this.patternLen, (f = Array(d + 2))[d + 1] = (1 << t) - 1, i = d; u <= i; i--)
                        if ((v = this.patternAlphabet[e.charAt(i - 1)]) && (E[i - 1] = 1), f[i] = (f[i + 1] << 1 | 1) & v, 0 !== t && (f[i] |= (p[i + 1] | p[i]) << 1 | 1 | p[i + 1]), f[i] & this.matchmask && (m = this._bitapScore(t, i - 1)) <= r) {
                            if (r = m, a = i - 1, g.push(a), a <= o) break;
                            u = Math.max(1, 2 * o - a)
                        } if (this._bitapScore(t + 1, o) > r) break;
                    p = f
                }
                return {
                    isMatch: 0 <= a,
                    score: 0 === m ? .001 : m,
                    matchedIndices: _ = this._getMatchedIndices(E)
                }
            }, i.prototype._getMatchedIndices = function(e) {
                for (var t, i = [], n = -1, s = -1, o = 0, r = e.length; o < r; o++)(t = e[o]) && -1 === n ? n = o : t || -1 === n || ((s = o - 1) - n + 1 >= this.options.minMatchCharLength && i.push([n, s]), n = -1);
                return e[o - 1] && o - 1 - n + 1 >= this.options.minMatchCharLength && i.push([n, o - 1]), i
            }, s.exports = t
        }()
    }, function(e, t, i) {
        var n;
        ! function() {
            "use strict";
            var o = {}.hasOwnProperty;

            function r() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var i = arguments[t];
                    if (i) {
                        var n = typeof i;
                        if ("string" === n || "number" === n) e.push(i);
                        else if (Array.isArray(i)) e.push(r.apply(null, i));
                        else if ("object" === n)
                            for (var s in i) o.call(i, s) && i[s] && e.push(s)
                    }
                }
                return e.join(" ")
            }
            void 0 !== e && e.exports ? e.exports = r : void 0 === (n = function() {
                return r
            }.apply(t, [])) || (e.exports = n)
        }()
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, s = function() {
                function n(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(e, t, i) {
                    return t && n(e.prototype, t), i && n(e, i), e
                }
            }(),
            o = i(5),
            r = i(26),
            a = (n = r) && n.__esModule ? n : {
                default: n
            };
        var c = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.store = (0, o.createStore)(a.default, window.devToolsExtension ? window.devToolsExtension() : void 0)
            }
            return s(e, [{
                key: "getState",
                value: function() {
                    return this.store.getState()
                }
            }, {
                key: "dispatch",
                value: function(e) {
                    this.store.dispatch(e)
                }
            }, {
                key: "subscribe",
                value: function(e) {
                    this.store.subscribe(e)
                }
            }, {
                key: "isLoading",
                value: function() {
                    return this.store.getState().general.loading
                }
            }, {
                key: "getItems",
                value: function() {
                    return this.store.getState().items
                }
            }, {
                key: "getItemsFilteredByActive",
                value: function() {
                    return this.getItems().filter(function(e) {
                        return !0 === e.active
                    }, [])
                }
            }, {
                key: "getItemsReducedToValues",
                value: function() {
                    return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.getItems()).reduce(function(e, t) {
                        return e.push(t.value), e
                    }, [])
                }
            }, {
                key: "getChoices",
                value: function() {
                    return this.store.getState().choices
                }
            }, {
                key: "getChoicesFilteredByActive",
                value: function() {
                    return this.getChoices().filter(function(e) {
                        return !0 === e.active
                    })
                }
            }, {
                key: "getChoicesFilteredBySelectable",
                value: function() {
                    return this.getChoices().filter(function(e) {
                        return !0 !== e.disabled
                    })
                }
            }, {
                key: "getSearchableChoices",
                value: function() {
                    return this.getChoicesFilteredBySelectable().filter(function(e) {
                        return !0 !== e.placeholder
                    })
                }
            }, {
                key: "getChoiceById",
                value: function(t) {
                    return !!t && this.getChoicesFilteredByActive().find(function(e) {
                        return e.id === parseInt(t, 10)
                    })
                }
            }, {
                key: "getGroups",
                value: function() {
                    return this.store.getState().groups
                }
            }, {
                key: "getGroupsFilteredByActive",
                value: function() {
                    var e = this.getGroups(),
                        n = this.getChoices();
                    return e.filter(function(e) {
                        var t = !0 === e.active && !1 === e.disabled,
                            i = n.some(function(e) {
                                return !0 === e.active && !1 === e.disabled
                            });
                        return t && i
                    }, [])
                }
            }, {
                key: "getGroupById",
                value: function(t) {
                    return this.getGroups().find(function(e) {
                        return e.id === t
                    })
                }
            }, {
                key: "getPlaceholderChoice",
                value: function() {
                    var e = this.getChoices();
                    return [].concat(function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
                            return i
                        }
                        return Array.from(e)
                    }(e)).reverse().find(function(e) {
                        return !0 === e.placeholder
                    })
                }
            }]), e
        }();
        t.default = c, e.exports = c
    }, function(e, t, i) {
        "use strict";
        t.__esModule = !0, t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = void 0;
        var n = c(i(6)),
            s = c(i(21)),
            o = c(i(23)),
            r = c(i(24)),
            a = c(i(25));
        c(i(22));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.createStore = n.default, t.combineReducers = s.default, t.bindActionCreators = o.default, t.applyMiddleware = r.default, t.compose = a.default
    }, function(e, t, i) {
        "use strict";
        t.__esModule = !0, t.ActionTypes = void 0, t.default = function e(t, i, n) {
            var s;
            "function" == typeof i && void 0 === n && (n = i, i = void 0);
            if (void 0 !== n) {
                if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
                return n(e)(t, i)
            }
            if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
            var o = t;
            var r = i;
            var a = [];
            var c = a;
            var l = !1;

            function h() {
                c === a && (c = a.slice())
            }

            function u() {
                return r
            }

            function d(t) {
                if ("function" != typeof t) throw new Error("Expected listener to be a function.");
                var i = !0;
                return h(), c.push(t),
                    function() {
                        if (i) {
                            i = !1, h();
                            var e = c.indexOf(t);
                            c.splice(e, 1)
                        }
                    }
            }

            function f(e) {
                if (!(0, p.default)(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (l) throw new Error("Reducers may not dispatch actions.");
                try {
                    l = !0, r = o(r, e)
                } finally {
                    l = !1
                }
                for (var t = a = c, i = 0; i < t.length; i++) {
                    var n = t[i];
                    n()
                }
                return e
            }
            f({
                type: m.INIT
            });
            return s = {
                dispatch: f,
                subscribe: d,
                getState: u,
                replaceReducer: function(e) {
                    if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                    o = e, f({
                        type: m.INIT
                    })
                }
            }, s[v.default] = function() {
                var e, n = d;
                return (e = {
                    subscribe: function(e) {
                        if ("object" != typeof e) throw new TypeError("Expected the observer to be an object.");

                        function t() {
                            e.next && e.next(u())
                        }
                        t();
                        var i = n(t);
                        return {
                            unsubscribe: i
                        }
                    }
                })[v.default] = function() {
                    return this
                }, e
            }, s
        };
        var p = n(i(7)),
            v = n(i(17));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var m = t.ActionTypes = {
            INIT: "@@redux/INIT"
        }
    }, function(e, t, i) {
        var n = i(8),
            s = i(14),
            o = i(16),
            r = Function.prototype,
            a = Object.prototype,
            c = r.toString,
            l = a.hasOwnProperty,
            h = c.call(Object);
        e.exports = function(e) {
            if (!o(e) || "[object Object]" != n(e)) return !1;
            var t = s(e);
            if (null === t) return !0;
            var i = l.call(t, "constructor") && t.constructor;
            return "function" == typeof i && i instanceof i && c.call(i) == h
        }
    }, function(e, t, i) {
        var n = i(9),
            s = i(12),
            o = i(13),
            r = n ? n.toStringTag : void 0;
        e.exports = function(e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : r && r in Object(e) ? s(e) : o(e)
        }
    }, function(e, t, i) {
        var n = i(10).Symbol;
        e.exports = n
    }, function(e, t, i) {
        var n = i(11),
            s = "object" == typeof self && self && self.Object === Object && self,
            o = n || s || Function("return this")();
        e.exports = o
    }, function(i, e) {
        (function(e) {
            var t = "object" == typeof e && e && e.Object === Object && e;
            i.exports = t
        }).call(e, function() {
            return this
        }())
    }, function(e, t, i) {
        var n = i(9),
            s = Object.prototype,
            o = s.hasOwnProperty,
            r = s.toString,
            a = n ? n.toStringTag : void 0;
        e.exports = function(e) {
            var t = o.call(e, a),
                i = e[a];
            try {
                var n = !(e[a] = void 0)
            } catch (e) {}
            var s = r.call(e);
            return n && (t ? e[a] = i : delete e[a]), s
        }
    }, function(e, t) {
        var i = Object.prototype.toString;
        e.exports = function(e) {
            return i.call(e)
        }
    }, function(e, t, i) {
        var n = i(15)(Object.getPrototypeOf, Object);
        e.exports = n
    }, function(e, t) {
        e.exports = function(t, i) {
            return function(e) {
                return t(i(e))
            }
        }
    }, function(e, t) {
        e.exports = function(e) {
            return null != e && "object" == typeof e
        }
    }, function(e, t, i) {
        e.exports = i(18)
    }, function(e, a, c) {
        (function(e, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var i, n, s = c(20),
                o = (i = s) && i.__esModule ? i : {
                    default: i
                };
            n = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : t;
            var r = (0, o.default)(n);
            a.default = r
        }).call(a, function() {
            return this
        }(), c(19)(e))
    }, function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t, i = e.Symbol;
            "function" == typeof i ? i.observable ? t = i.observable : (t = i("observable"), i.observable = t) : t = "@@observable";
            return t
        }
    }, function(e, t, i) {
        "use strict";
        t.__esModule = !0, t.default = function(e) {
            for (var t = Object.keys(e), f = {}, i = 0; i < t.length; i++) {
                var n = t[i];
                0, "function" == typeof e[n] && (f[n] = e[n])
            }
            var p = Object.keys(f);
            0;
            var v = void 0;
            try {
                s = f, Object.keys(s).forEach(function(e) {
                    var t = s[e],
                        i = t(void 0, {
                            type: o.ActionTypes.INIT
                        });
                    if (void 0 === i) throw new Error('Reducer "' + e + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                    var n = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                    if (void 0 === t(void 0, {
                            type: n
                        })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + o.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                })
            } catch (e) {
                v = e
            }
            var s;
            return function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments[1];
                if (v) throw v;
                for (var i, n, s, o = !1, r = {}, a = 0; a < p.length; a++) {
                    var c = p[a],
                        l = f[c],
                        h = e[c],
                        u = l(h, t);
                    if (void 0 === u) {
                        var d = (i = c, s = void 0, s = (n = t) && n.type, "Given action " + (s && '"' + s.toString() + '"' || "an action") + ', reducer "' + i + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
                        throw new Error(d)
                    }
                    r[c] = u, o = o || u !== h
                }
                return o ? r : e
            }
        };
        var o = i(6);
        n(i(7)), n(i(22));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    }, function(e, t) {
        "use strict";
        t.__esModule = !0, t.default = function(e) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(e);
            try {
                throw new Error(e)
            } catch (e) {}
        }
    }, function(e, t) {
        "use strict";

        function a(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        t.__esModule = !0, t.default = function(e, t) {
            if ("function" == typeof e) return a(e, t);
            if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var i = Object.keys(e), n = {}, s = 0; s < i.length; s++) {
                var o = i[s],
                    r = e[o];
                "function" == typeof r && (n[o] = a(r, t))
            }
            return n
        }
    }, function(e, t, i) {
        "use strict";
        t.__esModule = !0;
        var l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        };
        t.default = function() {
            for (var e = arguments.length, c = Array(e), t = 0; t < e; t++) c[t] = arguments[t];
            return function(a) {
                return function(e, t, i) {
                    var n = a(e, t, i),
                        s = n.dispatch,
                        o = [],
                        r = {
                            getState: n.getState,
                            dispatch: function(e) {
                                return s(e)
                            }
                        };
                    return o = c.map(function(e) {
                        return e(r)
                    }), s = h.default.apply(void 0, o)(n.dispatch), l({}, n, {
                        dispatch: s
                    })
                }
            }
        };
        var n, s = i(25),
            h = (n = s) && n.__esModule ? n : {
                default: n
            }
    }, function(e, t) {
        "use strict";
        t.__esModule = !0, t.default = function() {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            if (0 === t.length) return function(e) {
                return e
            };
            if (1 === t.length) return t[0];
            return t.reduce(function(e, t) {
                return function() {
                    return e(t.apply(void 0, arguments))
                }
            })
        }
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(5),
            s = c(i(27)),
            o = c(i(28)),
            r = c(i(29)),
            a = c(i(30));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = (0, n.combineReducers)({
            items: s.default,
            groups: o.default,
            choices: r.default,
            general: a.default
        });
        t.default = function(e, t) {
            var i = e;
            return "CLEAR_ALL" === t.type && (i = void 0), l(i, t)
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments[1];
            switch (t.type) {
                case "ADD_ITEM":
                    return [].concat(function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
                            return i
                        }
                        return Array.from(e)
                    }(e), [{
                        id: t.id,
                        choiceId: t.choiceId,
                        groupId: t.groupId,
                        value: t.value,
                        label: t.label,
                        active: !0,
                        highlighted: !1,
                        customProperties: t.customProperties,
                        placeholder: t.placeholder || !1,
                        keyCode: null
                    }]).map(function(e) {
                        return e.highlighted && (e.highlighted = !1), e
                    });
                case "REMOVE_ITEM":
                    return e.map(function(e) {
                        return e.id === t.id && (e.active = !1), e
                    });
                case "HIGHLIGHT_ITEM":
                    return e.map(function(e) {
                        return e.id === t.id && (e.highlighted = t.highlighted), e
                    });
                default:
                    return e
            }
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments[1];
            switch (t.type) {
                case "ADD_GROUP":
                    return [].concat(function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
                            return i
                        }
                        return Array.from(e)
                    }(e), [{
                        id: t.id,
                        value: t.value,
                        active: t.active,
                        disabled: t.disabled
                    }]);
                case "CLEAR_CHOICES":
                    return e.groups = [];
                default:
                    return e
            }
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments[1];
            switch (t.type) {
                case "ADD_CHOICE":
                    return [].concat(function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
                            return i
                        }
                        return Array.from(e)
                    }(e), [{
                        id: t.id,
                        elementId: t.elementId,
                        groupId: t.groupId,
                        value: t.value,
                        label: t.label || t.value,
                        disabled: t.disabled || !1,
                        selected: !1,
                        active: !0,
                        score: 9999,
                        customProperties: t.customProperties,
                        placeholder: t.placeholder || !1,
                        keyCode: null
                    }]);
                case "ADD_ITEM":
                    var i = e;
                    return t.activateOptions && (i = e.map(function(e) {
                        return e.active = t.active, e
                    })), -1 < t.choiceId && (i = e.map(function(e) {
                        return e.id === parseInt(t.choiceId, 10) && (e.selected = !0), e
                    })), i;
                case "REMOVE_ITEM":
                    return -1 < t.choiceId ? e.map(function(e) {
                        return e.id === parseInt(t.choiceId, 10) && (e.selected = !1), e
                    }) : e;
                case "FILTER_CHOICES":
                    var n = t.results;
                    return e.map(function(t) {
                        return t.active = n.some(function(e) {
                            return e.item.id === t.id && (t.score = e.score, !0)
                        }), t
                    });
                case "ACTIVATE_CHOICES":
                    return e.map(function(e) {
                        return e.active = t.active, e
                    });
                case "CLEAR_CHOICES":
                    return e.choices = [];
                default:
                    return e
            }
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                    loading: !1
                },
                t = arguments[1];
            switch (t.type) {
                case "LOADING":
                    return {
                        loading: t.isLoading
                    };
                default:
                    return e
            }
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.addItem = function(e, t, i, n, s, o, r, a) {
            return {
                type: "ADD_ITEM",
                value: e,
                label: t,
                id: i,
                choiceId: n,
                groupId: s,
                customProperties: o,
                placeholder: r,
                keyCode: a
            }
        }, t.removeItem = function(e, t) {
            return {
                type: "REMOVE_ITEM",
                id: e,
                choiceId: t
            }
        }, t.highlightItem = function(e, t) {
            return {
                type: "HIGHLIGHT_ITEM",
                id: e,
                highlighted: t
            }
        }, t.addChoice = function(e, t, i, n, s, o, r, a, c) {
            return {
                type: "ADD_CHOICE",
                value: e,
                label: t,
                id: i,
                groupId: n,
                disabled: s,
                elementId: o,
                customProperties: r,
                placeholder: a,
                keyCode: c
            }
        }, t.filterChoices = function(e) {
            return {
                type: "FILTER_CHOICES",
                results: e
            }
        }, t.activateChoices = function() {
            return {
                type: "ACTIVATE_CHOICES",
                active: !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]
            }
        }, t.clearChoices = function() {
            return {
                type: "CLEAR_CHOICES"
            }
        }, t.addGroup = function(e, t, i, n) {
            return {
                type: "ADD_GROUP",
                value: e,
                id: t,
                active: i,
                disabled: n
            }
        }, t.clearAll = function() {
            return {
                type: "CLEAR_ALL"
            }
        }, t.setIsLoading = function(e) {
            return {
                type: "LOADING",
                isLoading: e
            }
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            s = (t.capitalise = function(e) {
                return e.replace(/\w\S*/g, function(e) {
                    return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
                })
            }, t.generateChars = function(e) {
                for (var t = "", i = 0; i < e; i++) {
                    t += l(0, 36).toString(36)
                }
                return t
            }),
            o = (t.generateId = function(e, t) {
                var i = e.id || e.name && e.name + "-" + s(2) || s(4);
                return i = t + (i = i.replace(/(:|\.|\[|\]|,)/g, ""))
            }, t.getType = function(e) {
                return Object.prototype.toString.call(e).slice(8, -1)
            }),
            r = t.isType = function(e, t) {
                var i = o(t);
                return null != t && i === e
            },
            a = (t.isNode = function(e) {
                return "object" === ("undefined" == typeof Node ? "undefined" : i(Node)) ? e instanceof Node : e && "object" === (void 0 === e ? "undefined" : i(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
            }, t.isElement = function(e) {
                return "object" === ("undefined" == typeof HTMLElement ? "undefined" : i(HTMLElement)) ? e instanceof HTMLElement : e && "object" === (void 0 === e ? "undefined" : i(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
            }, t.extend = function i() {
                for (var n = {}, e = arguments.length, t = function(e) {
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r("Object", e[t]) ? n[t] = i(!0, n[t], e[t]) : n[t] = e[t])
                    }, s = 0; s < e; s++) {
                    var o = arguments[s];
                    r("Object", o) && t(o)
                }
                return n
            }, t.whichTransitionEvent = function() {
                var e, t = document.createElement("fakeelement"),
                    i = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (e in i)
                    if (void 0 !== t.style[e]) return i[e]
            }, t.whichAnimationEvent = function() {
                var e, t = document.createElement("fakeelement"),
                    i = {
                        animation: "animationend",
                        OAnimation: "oAnimationEnd",
                        MozAnimation: "animationend",
                        WebkitAnimation: "webkitAnimationEnd"
                    };
                for (e in i)
                    if (void 0 !== t.style[e]) return i[e]
            }),
            c = (t.getParentsUntil = function(e, t, i) {
                for (var n = []; e && e !== document; e = e.parentNode) {
                    if (t) {
                        var s = t.charAt(0);
                        if ("." === s && e.classList.contains(t.substr(1))) break;
                        if ("#" === s && e.id === t.substr(1)) break;
                        if ("[" === s && e.hasAttribute(t.substr(1, t.length - 1))) break;
                        if (e.tagName.toLowerCase() === t) break
                    }
                    if (i) {
                        var o = i.charAt(0);
                        "." === o && e.classList.contains(i.substr(1)) && n.push(e), "#" === o && e.id === i.substr(1) && n.push(e), "[" === o && e.hasAttribute(i.substr(1, i.length - 1)) && n.push(e), e.tagName.toLowerCase() === i && n.push(e)
                    } else n.push(e)
                }
                return 0 === n.length ? null : n
            }, t.wrap = function(e, t) {
                return t = t || document.createElement("div"), e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t.appendChild(e)
            }, t.getSiblings = function(e) {
                for (var t = [], i = e.parentNode.firstChild; i; i = i.nextSibling) 1 === i.nodeType && i !== e && t.push(i);
                return t
            }, t.findAncestor = function(e, t) {
                for (;
                    (e = e.parentElement) && !e.classList.contains(t););
                return e
            }, t.findAncestorByAttrName = function(e, t) {
                for (var i = e; i;) {
                    if (i.hasAttribute(t)) return i;
                    i = i.parentElement
                }
                return null
            }, t.debounce = function(n, s, o) {
                var r;
                return function() {
                    var e = this,
                        t = arguments,
                        i = o && !r;
                    clearTimeout(r), r = setTimeout(function() {
                        r = null, o || n.apply(e, t)
                    }, s), i && n.apply(e, t)
                }
            }, t.getElemDistance = function(e) {
                var t = 0;
                if (e.offsetParent)
                    for (; t += e.offsetTop, e = e.offsetParent;);
                return 0 <= t ? t : 0
            }, t.getElementOffset = function(e, t) {
                var i = t;
                return 1 < i && (i = 1), 0 < i && (i = 0), Math.max(e.offsetHeight * i)
            }, t.getAdjacentEl = function(e, t) {
                var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1;
                if (e && t) {
                    var n = e.parentNode.parentNode,
                        s = Array.from(n.querySelectorAll(t)),
                        o = s.indexOf(e);
                    return s[o + (0 < i ? 1 : -1)]
                }
            }, t.getScrollPosition = function(e) {
                return "bottom" === e ? Math.max((window.scrollY || window.pageYOffset) + (window.innerHeight || document.documentElement.clientHeight)) : window.scrollY || window.pageYOffset
            }, t.isInView = function(e, t, i) {
                return this.getScrollPosition(t) > this.getElemDistance(e) + this.getElementOffset(e, i)
            }, t.isScrolledIntoView = function(e, t) {
                var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1;
                if (e) {
                    return 0 < i ? t.scrollTop + t.offsetHeight >= e.offsetTop + e.offsetHeight : e.offsetTop >= t.scrollTop
                }
            }, t.stripHTML = function(e) {
                return e.replace(/&/g, "&amp;").replace(/>/g, "&rt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
            }),
            l = (t.addAnimation = function(t, i) {
                var n = a();
                t.classList.add(i), t.addEventListener(n, function e() {
                    t.classList.remove(i), t.removeEventListener(n, e, !1)
                }, !1)
            }, t.getRandomNumber = function(e, t) {
                return Math.floor(Math.random() * (t - e) + e)
            }),
            h = t.strToEl = (n = document.createElement("div"), function(e) {
                var t, i = e.trim();
                for (n.innerHTML = i, t = n.children[0]; n.firstChild;) n.removeChild(n.firstChild);
                return t
            });
        t.getWidthOfInput = function(e) {
            var t = e.value || e.placeholder,
                i = e.offsetWidth;
            if (t) {
                var n = h("<span>" + c(t) + "</span>");
                if (n.style.position = "absolute", n.style.padding = "0", n.style.top = "-9999px", n.style.left = "-9999px", n.style.width = "auto", n.style.whiteSpace = "pre", document.body.contains(e) && window.getComputedStyle) {
                    var s = window.getComputedStyle(e);
                    s && (n.style.fontSize = s.fontSize, n.style.fontFamily = s.fontFamily, n.style.fontWeight = s.fontWeight, n.style.fontStyle = s.fontStyle, n.style.letterSpacing = s.letterSpacing, n.style.textTransform = s.textTransform, n.style.padding = s.padding)
                }
                document.body.appendChild(n), t && n.offsetWidth !== e.offsetWidth && (i = n.offsetWidth + 4), document.body.removeChild(n)
            }
            return i + "px"
        }, t.sortByScore = function(e, t) {
            return e.score - t.score
        }, t.triggerEvent = function(e, t) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                n = new CustomEvent(t, {
                    detail: i,
                    bubbles: !0,
                    cancelable: !0
                });
            return e.dispatchEvent(n)
        }
    }, function(e, t) {
        "use strict";
        ! function() {
            var t, c, n, l;

            function e(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var i = document.createEvent("CustomEvent");
                return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
            }
            Array.from || (Array.from = (t = Object.prototype.toString, c = function(e) {
                return "function" == typeof e || "[object Function]" === t.call(e)
            }, n = Math.pow(2, 53) - 1, l = function(e) {
                var t, i = (t = Number(e), isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (0 < t ? 1 : -1) * Math.floor(Math.abs(t)) : t);
                return Math.min(Math.max(i, 0), n)
            }, function(e) {
                var t = Object(e);
                if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
                var i, n = 1 < arguments.length ? arguments[1] : void 0;
                if (void 0 !== n) {
                    if (!c(n)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                    2 < arguments.length && (i = arguments[2])
                }
                for (var s, o = l(t.length), r = c(this) ? Object(new this(o)) : new Array(o), a = 0; a < o;) s = t[a], r[a] = n ? void 0 === i ? n(s, a) : n.call(i, s, a) : s, a += 1;
                return r.length = o, r
            })), Array.prototype.find || (Array.prototype.find = function(e) {
                if (null == this) throw new TypeError("Array.prototype.find called on null or undefined");
                if ("function" != typeof e) throw new TypeError("predicate must be a function");
                for (var t, i = Object(this), n = i.length >>> 0, s = arguments[1], o = 0; o < n; o++)
                    if (t = i[o], e.call(s, t, o, i)) return t
            }), e.prototype = window.Event.prototype, window.CustomEvent = e
        }()
    }])
});