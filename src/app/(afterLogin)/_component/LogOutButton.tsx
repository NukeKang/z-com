'use client';

import style from './logOutButton.module.css';

export default function LogOutButton() {
  const me = {
    id: 'minsung',
    nickname: '민성',
    image: '/5Udwvqim.jpg',
  };
  const onLogOut = () => {};

  return (
    <button className={style.logOutButton} onClick={onLogOut}>
      <div className={style.logOutUserImage}>
        <img src={me.image} alt={me.id} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
