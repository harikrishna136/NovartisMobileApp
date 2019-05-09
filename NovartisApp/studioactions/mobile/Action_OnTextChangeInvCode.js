function Action_OnTextChangeInvCode(eventobject, changedtext) {
    return AS_TextField_daca81d5e2bb4522a1ec8a5a56bbd70f(eventobject, changedtext);
}

function AS_TextField_daca81d5e2bb4522a1ec8a5a56bbd70f(eventobject, changedtext) {
    return searchInvCode.call(this);
}