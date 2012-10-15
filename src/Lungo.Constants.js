/**
 * Object with data-attributes (HTML5) with a special <markup>
 *
 * @namespace Lungo
 * @class Constants
 *
 * @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
 */

Lungo.Constants = {

    ELEMENT: {
        SECTION: 'section',
        ARTICLE: 'article',
        ASIDE: 'aside',
        BODY: 'body',
        DIV: 'div',
        LIST: '<ul></ul>',
        LI: 'li',
        SPAN: '<span>&nbsp;</span>'
    },

    CLASS: {
        ACTIVE: 'active',
        ASIDE: 'aside',
        SHOW: 'show',
        HIDE: 'hide',
        CURRENT: 'current',
        RIGHT: 'right',
        LEFT: 'left',
        HORIZONTAL: 'horizontal',
        SMALL: 'small'
    },

    TRIGGER: {
        LOAD: 'load',
        UNLOAD: 'unload'
    },

    ATTRIBUTE: {
        ID: 'id',
        HREF: 'href',
        TITLE: 'title',
        ARTICLE: 'article',
        CLASS: 'class',
        WIDTH: 'width',
        HEIGHT: 'height',
        PIXEL: 'px',
        PERCENT: '%',
        ROUTER: 'router',
        FIRST: 'first',
        LAST: 'last',
        EMPTY: ''
    },

    BINDING: {
        START: '{{',
        END: '}}',
        KEY: 'value'
    },

    ERROR: {
        DATABASE: 'ERROR: Connecting to Data.Sql.',
        DATABASE_TRANSACTION: 'ERROR: Data.Sql >> ',
        ROUTER: 'ERROR: The target does not exists >>',
        LOADING_RESOURCE: 'ERROR: Loading resource: '
    }

};
