import { FC, useState } from "react";
import { MdEdit } from "react-icons/md";
import { OnChangeListener } from "types/functions";
import "styles/components/InputChange.scss";

export type PropInputChange = {
    value: string;
    field: string;
    onChange: OnChangeListener;
};

const InputChange: FC<PropInputChange> = ({ value, field, onChange }) => {
    
    const [editMode, setEditMode] = useState<boolean>(false);

    return (
        <div className='input-change'>
            <label htmlFor='text'>Change { field }</label>
            <input type='text' name='text' disabled={!editMode} onChange={onChange} defaultValue={value}/>
            <MdEdit onClick={ () => setEditMode(!editMode) } className={ (editMode) ? 'active' : '' }/>
        </div>
    );
};

export default InputChange;
