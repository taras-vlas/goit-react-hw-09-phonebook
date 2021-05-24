import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../../redux/contacts';
import { getFilter } from '../../redux/contacts';
import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChangeFilter = useCallback(
    event => {
      dispatch(changeFilter(event.target.value));
    },
    [dispatch],
  );

  return (
    <div className={s.filter}>
      <p className={s.title}>Find contact by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChangeFilter}
        name="filter"
        placeholder="..."
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </div>
  );
}

// const Filter = ({ value, onChangeFilter }) => {
//   return (
//     <div className={s.filter}>
//       <input
//         className={s.input}
//         type="text"
//         value={value}
//         onChange={onChangeFilter}
//         name="filter"
//         placeholder="Find contact by name"
//       />
//     </div>
//   );
// };

// const mapStateToProps = state => ({
//   value: getFilter(state),
// });

// const mapDispatchProps = dispatch => ({
//   onChangeFilter: event => dispatch(changeFilter(event.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchProps)(Filter);
