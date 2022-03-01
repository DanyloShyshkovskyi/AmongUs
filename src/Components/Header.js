import Dropdown from "./Dropdown";
import {DropdownData} from "../Constants/DropdownData";

const Header = ({blockCount, setBlockCount, setStart, restart, start}) => {
    return (
        <div className={`header`}>
            <button
                disabled={start}
                onClick={()=>setStart(true)}
                className={`header__item`}>Start</button>
            <Dropdown
                className={`header__item`}
                data={DropdownData}
                defaultValue={blockCount}
                handleClick={setBlockCount}
                disabled={start}
            />
            <button
                disabled={!start}
                onClick={()=>restart()}
                className={`header__item`}>Restart</button>
        </div>
    );
}

export default Header;
