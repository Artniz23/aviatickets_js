import {getAutocompleteInstance, getDatePickerInstance} from '../plugins/materialize';

class FormUI {
    constructor(autocompleteInstance, datePickerInstance) {
        this._form = document.forms['locationControls'];
        this.origin = document.getElementById('autocomplete-origin');
        this.destination = document.getElementById('autocomplete-destination');
        this.depart = document.getElementById('datepicker-depart');
        this.return = document.getElementById('datepicker-return');
        this.originAutocomplete = autocompleteInstance(this.origin);
        this.destinationAutocomplete = autocompleteInstance(this.destination);
        this.departDatePicker = datePickerInstance(this.depart);
        this.returnDatePicker = datePickerInstance(this.return);
    }

    get form() {
        return this._form;
    }

    get originValue() {
        return this.origin.value;
    }

    get destinationValue() {
        return this.destination.value;
    }

    get departDateValue() {
        // toString => method of materialize for getting value (.value)
        return this.departDatePicker.toString();
    }

    get returnDateValue() {
        // toString => method of materialize for getting value (.value)
        return this.returnDatePicker.toString();
    }

    setAutocompleteData(data) {
        this.originAutocomplete.updateData(data);
        this.destinationAutocomplete.updateData(data);
    }
}

const formUI = new FormUI(getAutocompleteInstance, getDatePickerInstance);

export default formUI;