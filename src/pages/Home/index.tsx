import React, { useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import UserCard from "../../components/UserCard";

import { User } from "../../components/UserCard/index";
import Repository, { Repo } from "../../components/RepositoryCard/index";

import api from "../../services/api";

import {
  BackgroundImage,
  Content,
  Form,
  FreepikLink,
  FloatElement,
  SubmitButton,
  UserContent,
  Repositories,
} from "./styles";

import background from "../../assets/Pair programming-rafiki.svg";

const Home = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<User>({
    login: "",
    name: "",
    bio: "",
    public_repos: 0,
    followers: 0,
    following: 0,
    location: "",
    avatar_url: "",
    html_url: "",
  });
  const [repos, setRepos] = useState<Repo[]>([
    {
      name: "",
      description: "",
      language: "",
      stargazers_count: 0,
      html_url: "",
    },
  ]);


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await api
      .get(`${username}`)
      .then((response) => {
        const { data } = response;
        setUser(data);
      })
      .catch(() => {
        alert("User not found!");
      });

    await api.get(`${username}/repos`).then((response) => {
      const { data } = response;
      setRepos(data);
    });
  }

  return (
    <>
      <Header />
      <Content>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Input
            placeholder="GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            required
          />
          <SubmitButton>Submit</SubmitButton>
        </Form>
        {user.login && repos ? (
          <UserContent>
            <FloatElement>
              <UserCard
                login={user.login}
                name={user.name}
                bio={user.bio}
                public_repos={user.public_repos}
                followers={user.followers}
                following={user.following}
                location={user.location}
                avatar_url={user.avatar_url}
                html_url={user.html_url}
              />
            </FloatElement>
            {repos.length
              ? <FloatElement>
                <Repositories>
                  {repos.map((repo: Repo) => {
                  return (
                    <Repository
                    key={repo.name}
                    name={repo.name}
                    description={repo.description}
                    language={repo.language}
                    stargazers_count={repo.stargazers_count}
                    html_url={repo.html_url}
                  />
                  );
                })}
                </Repositories>
              </FloatElement>
              : null}
          </UserContent>
        ) : (
          <div>
            <BackgroundImage src={background} alt="background" />
            <FreepikLink href="https://storyset.com/web">
              Illustration by Freepik Storyset
            </FreepikLink>
          </div>
        )}
      </Content>
    </>
  );
};

export default Home;
