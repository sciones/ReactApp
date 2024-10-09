
function Header({onChange}) {

    return(
        <nav>
            <a href="comp_calc" onClick={(e) => {
                e.preventDefault(); onChange("compCalc");}}>Compound Calc</a>
            <a href="disbersement" onClick={(e) => {
                e.preventDefault(); onChange("disbursement");}}>Disbursement</a>
            <a href="401k" onClick={(e) => {
                e.preventDefault(); onChange("401k");}}>401k Calculation</a>
        </nav>
    );
}

export default Header;