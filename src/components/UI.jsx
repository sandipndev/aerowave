import { connect } from "react-redux";

import ATMUI from "./ATMUI";

function UI(props) {
    if (!props.loaded)
    return <div class="absolute top-0 flex flex-col items-center justify-center w-screen h-screen text-white">
        <img class="w-1/3" src="/main_logo.png" />
        <div class="mt-2 text-xl">Please wait while the model loads...</div>
        <svg class="mt-4 animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        </div>
    else return <ATMUI />;
}

const mapStateToProps = (state) => ({
    loaded: state.hand.loaded,
});

export default connect(mapStateToProps)(UI);