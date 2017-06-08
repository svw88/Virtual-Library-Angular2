"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let HighlightPipe = class HighlightPipe {
    transform(text, search) {
        if (search == undefined) {
            return text;
        }
        else {
            var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            pattern = pattern.split(' ').filter((t) => {
                return t.length > 0;
            }).join('|');
            var regex = new RegExp(pattern, 'gi');
            return search ? text.replace(regex, (match) => `<span class="highlight">${match}</span>`) : text;
        }
        ;
    }
    ;
};
HighlightPipe = __decorate([
    core_1.Pipe({ name: 'highlight' })
], HighlightPipe);
exports.HighlightPipe = HighlightPipe;
//# sourceMappingURL=highlight.pipe.js.map