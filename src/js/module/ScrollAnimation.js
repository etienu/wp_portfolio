/**
 * スクロールアニメーションのクラス
 * 使用モジュール：@terwanerik/scrolltrigger
 * @see https://www.willstyle.co.jp/blog/2869/
 */

import ScrollTrigger from '@terwanerik/scrolltrigger'

export default class ScrollAnimation {
    constructor(_parm) {
        this.attrTrigger = 'data-js-trigger';
    }

    init() {
        const trigger = new ScrollTrigger();
        trigger.add(`[${this.attrTrigger}]`, {
            once: true,
            offset: {
                element: {
                    x: 0,
                    y: (trigger, rect, direction) => {
                        return 0.1
                    }
                },
                viewport: {
                    x: 0,
                    y: (trigger, frame, direction) => {
                        return trigger.visible ? 0 : 0.1
                    }
                }
            },
            toggle: {
                class: { in: '__visible',
                    out: ['__invisible', 'extraClassToToggleWhenHidden']
                },
                callback: { in: null,
                    visible: null,
                    out: (trigger) => {
                        return new Promise((resolve, reject) => {
                            setTimeout(resolve, 10)
                        })
                    }
                }
            },
        });
    }
}