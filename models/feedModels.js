class feedCard {
    constructor(props) {
        this.photoUri = props.photoUri;
        this.text = props.text;
        this.options = props.options;
    }

    getPhotoUri() {
        return this.photoUri;
    }

}