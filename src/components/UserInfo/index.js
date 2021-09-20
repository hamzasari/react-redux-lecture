import {connect} from 'react-redux';
import {emptyUserInfo, setUserInfo} from '../../redux/actions/user';
import {useState} from 'react';

const UserInfo = ({ userInfo, dispatchSetUserInfo, dispatchEmptyUserInfo }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleEmptyUserInfo = () => {
    dispatchEmptyUserInfo();
  };

  const handleChangeUserInfo = () => {
    dispatchSetUserInfo({
      name: name,
      surname: surname,
    });
  };

  return (
    <div>
      <div>
        Selam,&nbsp;
        <span>{userInfo.name}</span>&nbsp;
        <span>{userInfo.surname}</span>
      </div>
      <div>
        <button onClick={handleEmptyUserInfo}>
          Empty User Info
        </button>
      </div>
      <div>
        <h6>Name, {name}</h6>
        <input type={`text`} value={name} onChange={(e) => setName(e.target.value)} />
        <h6>Surname, {surname}</h6>
        <input type={`text`} value={surname} onChange={(e) => setSurname(e.target.value)} />
        <br />
        <button onClick={handleChangeUserInfo}>
          Change User Info
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.user.info,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchSetUserInfo: (userInfo) => {
    dispatch(setUserInfo(userInfo));
  },
  dispatchEmptyUserInfo: () => {
    dispatch(emptyUserInfo());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
