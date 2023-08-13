"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const typeorm_1 = require("typeorm");
const customers_entity_1 = __importDefault(require("./customers.entity"));
let Contact = exports.Contact = class Contact {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Contact.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contact.prototype, "full_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contact.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ "length": 11 }),
    __metadata("design:type", String)
], Contact.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'date' }),
    __metadata("design:type", String)
], Contact.prototype, "registration_Date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customers_entity_1.default),
    __metadata("design:type", customers_entity_1.default)
], Contact.prototype, "customer", void 0);
exports.Contact = Contact = __decorate([
    (0, typeorm_1.Entity)('contacts')
], Contact);
exports.default = Contact;
