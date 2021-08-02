// import { connect } from 'react-redux';          /*** рефакторинг на хуки*/
// import PropTypes from 'prop-types';             /*** рефакторинг на хуки*/
import { useCallback } from 'react';                        /*** рефакторинг на хуки*/
import { useSelector, useDispatch } from 'react-redux';     /*** рефакторинг на хуки*/
import TextField from "@material-ui/core/TextField";
import { contactsSelectors, contactsActions } from '../../redux/contacts';
import styles from './Filter.module.scss';

// Компонент фільтра 
const Filter = () => {   //const Filter = ({ value, isLoading, onChange }) => {
//export default function Filter() {  // або use функціональний підхід
  const value = useSelector(contactsSelectors.getFilter);  /*** рефакторинг на хуки*/  // Селектор значення фільтра
  const isLoading = useSelector(contactsSelectors.getLoading);  /*** рефакторинг на хуки*/  // Селектор статуса загрузки

  const dispatch = useDispatch();   /*** рефакторинг на хуки*/

  // dispatch в экшн значення інпута
  const onChange = useCallback(
    e => {
      dispatch(contactsActions.changeFilter(e.currentTarget.value));
    },
    [dispatch],
  );


  return (
  <div className={styles.container}>
    <h2 className={styles.title}>Contacts</h2>

    {/* <label className={styles.label}>
      <span className={styles.label__text}>Searches by name</span>
      <input
        type="text"
        name="filter"
        placeholder="Find"
        className={styles.input}
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Find contacts by name"
        disabled={isLoading}
        required
      />
    </label> */}

        <div className={styles.HeaderWrapper}> 
          <TextField
            value={value}        
            onChange={onChange}        
            label="Searches by name"       // Фільтрувати  
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            disabled={isLoading}
            required
          />
        </div>

  </div>
)};

// Filter.defaultProps = {
//   value: '',
// };

// Filter.propTypes = {
//   value: PropTypes.string,
//   isLoading: PropTypes.bool.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
// //export default Filter;


// const mapStateToProps = state => ({
//   value: contactsSelectors.getFilter(state),
//   //isLoading: contactsSelectors.getLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: event =>
//     dispatch(contactsActions.changeFilter(event.currentTarget.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
export default Filter;