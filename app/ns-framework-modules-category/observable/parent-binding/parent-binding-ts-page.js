"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var viewModel = observable_1.fromObject({
        items: [1, 2, 3],
        test: "Parent binding! (the value came from the `test` property )"
    });
    page.bindingContext = viewModel;
}
exports.onNavigatingTo = onNavigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LWJpbmRpbmctdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhcmVudC1iaW5kaW5nLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrREFBeUU7QUFHekUsd0JBQStCLElBQWU7SUFDMUMsSUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixJQUFNLFNBQVMsR0FBRyx1QkFBVSxDQUFDO1FBQ3pCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLElBQUksRUFBRSw0REFBNEQ7S0FDckUsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7QUFDcEMsQ0FBQztBQVJELHdDQVFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPj4gcGFyZW50LWJpbmRpbmctY29kZS10c1xuaW1wb3J0IHsgZnJvbU9iamVjdCwgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZpZXdNb2RlbCA9IGZyb21PYmplY3Qoe1xuICAgICAgICBpdGVtczogWzEsIDIsIDNdLFxuICAgICAgICB0ZXN0OiBcIlBhcmVudCBiaW5kaW5nISAodGhlIHZhbHVlIGNhbWUgZnJvbSB0aGUgYHRlc3RgIHByb3BlcnR5IClcIlxuICAgIH0pO1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZpZXdNb2RlbDtcbn1cbi8vIDw8IHBhcmVudC1iaW5kaW5nLWNvZGUtdHNcbiJdfQ==