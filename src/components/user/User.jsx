import { useEffect, useState } from "react";
import * as S from "./styles";
import { getUserInfo } from "../../api";

export const UserItem = ({ user }) => {
  const [view, setView] = useState(false);
  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    setUserDetails("");
  }, []);

  useEffect(() => {
    if (view === true) {
      getUserInfo(user.url).then((info) => {
        setUserDetails(info);
      });
    }
  }, [view]);

  const toggleView = () => {
    setView(!view);
  };

  return (
    <div>
      <S.UserBlock>
        <S.UserPic src={user?.avatar_url}></S.UserPic>
        <S.TextBlock>
          <S.TextField>
            <span style={{ color: "#ff00ff" }}>Логин: </span>
            {user?.login}
          </S.TextField>
          <S.TextField>
            <span style={{ color: "#ff00ff" }}>Url: </span>
            {user?.html_url}
          </S.TextField>
          <S.TextField style={{ cursor: "pointer" }} onClick={toggleView}>
            {view ? (
              <div>
                <div>
                  <span style={{ color: "#ff00ff" }}>Имя: </span>
                  {userDetails?.name}
                </div>
                <div>
                  <span style={{ color: "#ff00ff" }}>Локация: </span>
                  {userDetails?.location}
                </div>
                <div>
                  <span style={{ color: "#ff00ff" }}>Био: </span>
                  {userDetails?.bio}
                </div>
              </div>
            ) : (
              <div style={{ color: "#ff00ff" }}>Показать больше</div>
            )}
          </S.TextField>
        </S.TextBlock>
      </S.UserBlock>
    </div>
  );
};
