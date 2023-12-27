import { useState } from "react";
import * as S from "./styles";
import { UserItem } from "../user/User";
import { getUsers } from "../../api";

export const Search = () => {
  const [searchWord, setSearchWord] = useState("");
  const [users, setUsers] = useState([]);

  const getUsersFunc = (e) => {
    e.preventDefault();
    getUsers(searchWord)
      .then((users) => {
        setUsers(users.items);
        setSearchWord("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <S.Wrapper>
      <S.Main>
        <S.MainSearch>
          <S.SearchForm>
            <S.SearchText
              type="search"
              placeholder="Поиск по пользователям"
              name="search"
              onChange={(event) => setSearchWord(event.target.value)}
            ></S.SearchText>
            <S.SearchTextMob
              type="search"
              placeholder="Поиск"
              name="search-mob"
              onChange={(event) => setSearchWord(event.target.value)}
            ></S.SearchTextMob>
          </S.SearchForm>
          <S.SearchButton onClick={getUsersFunc}>Найти</S.SearchButton>
        </S.MainSearch>
        <S.MainContainer>
          <S.MainTitle>Пользователи</S.MainTitle>
          <S.MainContent>
            <S.Users>
              {Boolean(users.length)
                ? users.map((user) => (
                    <UserItem
                      user={user}
                      // title={ad?.title}
                      // price={ad?.price}
                      // place={ad?.user.city}
                      // date={ad?.created_on}
                      // img_id={ad?.images[0]?.url}
                    />
                  ))
                : ""}
            </S.Users>
          </S.MainContent>
        </S.MainContainer>
      </S.Main>
    </S.Wrapper>
  );
};
