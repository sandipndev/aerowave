import {useState} from "react";
import { connect } from "react-redux"
import Card from "./Card";

const genPinStar = (len) => {
    let x = "";
    for (let i = 0; i < len; i++) x += "*";
    return x;
}

const showAlert = (msg) => {
    const a = document.getElementById("alert-box");
    a.innerHTML = "<p>" + msg + "</p>";
    a.style.display = "block";
    setTimeout(() => {
      a.style.display = "none";
    }, 5000);
  };

function ATMUI(props) {
    const [pageNo, setPageNo] = useState(1);
    const [pin, setPin] = useState("");
    const [lastBackspaced, setLastBackspaced] = useState(Date.now());

    if (props.finger_locx && props.finger_locx[20].x > props.finger_locx[8].x && Date.now() - 1000 > lastBackspaced) {
        setPin(pin.slice(0, -1));
        setLastBackspaced(Date.now());
    }

    const login = () => {
        setPageNo(2);
    }

    const submitPin = () => {
        if (pin !== "1234") return showAlert("Wrong PIN");
        setPageNo(3);
    }

    const addPin = (n) => setPin(pin + String(n));

    switch (pageNo) {
    case 1:
        return <div id="atm-ui" 
            class="absolute top-0 w-screen overflow-hidden h-screen flex items-center justify-center text-white p-10"
        >
            <Card onClick={login}>
                <div class="text-2xl font-medium uppercase underline">Login</div>
                <div class="mt-2 text-lg">Login to your account by clicking here.</div>
            </Card>
        </div>;
    case 2:
        return <div id="atm-ui" 
        class="absolute top-0 w-screen overflow-hidden h-screen flex flex-col items-center justify-center text-white p-10"
        >
            <div class="text-4xl font-medium uppercase underline">Enter your PIN</div>
            <div class="bg-gray-900 rounded px-8 py-2 mt-4 text-4xl font-mono w-64 text-center tracking-widest h-14">{genPinStar(pin.length)}</div>

            <div class="grid grid-cols-3 gap-4 mt-6">
                <Card className="h-20 flex items-center justify-center text-4xl" onClick={() => addPin(1)}>1</Card>
                <Card className="h-20 flex items-center justify-center text-4xl" onClick={() => addPin(2)}>2</Card>
                <Card className="h-20 flex items-center justify-center text-4xl" onClick={() => addPin(3)}>3</Card>
                <Card className="h-20 flex items-center justify-center text-4xl" onClick={() => addPin(4)}>4</Card>
                <Card className="h-20 flex items-center justify-center text-4xl" onClick={() => addPin(5)}>5</Card>
                <Card className="h-20 flex items-center justify-center text-4xl" onClick={() => addPin(6)}>6</Card>
                <Card className="h-20 flex items-center justify-center text-4xl" onClick={() => addPin(7)}>7</Card>
                <Card className="h-20 flex items-center justify-center text-4xl" onClick={() => addPin(8)}>8</Card>
                <Card className="h-20 flex items-center justify-center text-4xl" onClick={() => addPin(9)}>9</Card>
                <div class="col-span-2"></div>
                <Card className="h-20 mt-4 border-blue-400 flex items-center justify-center text-2xl font-medium" onClick={submitPin}>✅ SUBMIT</Card>
            </div>

        </div>;
    case 3:
        return <div id="atm-ui" 
        class="absolute top-0 w-screen overflow-hidden h-screen flex flex-col items-center justify-center text-white p-10 -mt-16"
        >

            <div class="flex flex-col items-center -mr-64 mb-6">
                <div class="text-xl text-gray-400 font-mono self-end">Account Holder</div>
                <div class="text-4xl font-mono self-end">Sandipan Dey</div>

                <div class="text-xl text-gray-400 font-mono self-end mt-4">Balance</div>
                <div class="text-4xl font-mono self-end">$1000</div>
            </div>
            
            <div class="border-t border-white w-64 mb-12"></div>

            <div class="flex flex-row">
            <Card className="h-40 mr-4">
                <div class="uppercase underline font-medium text-2xl">Withdraw Money</div>
                <div class="mt-2">Withdraw a some of money 💲 from your bank account.</div>
            </Card>

            <Card className="ml-4 h-40">
                <div class="uppercase underline font-medium text-2xl">Mini Statement</div>
                <div class="mt-2">See the history of last 10 transactions you have got on your account.</div>
            </Card>
            </div>

        </div>;
    default: return <></>;
    }
}

const mapStateToProps = (state) => ({
    finger_locx: state.hand.finger_locx,
});

export default connect(mapStateToProps)(ATMUI);