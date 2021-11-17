import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import SubContainer from "../../components/SubContainer";
import NameForm from "../../components/NameForm";
import NameResults from "../../components/NameResults";
import NameContext from "../../utils/NameContext";

function UserNameTest() {
  const [usernameState, setUserNameState] = useState({
    name: "",
    length: ""
  });

  const [search, setSearch] = useState("UserName");

  useEffect(() => {
    document.title = search ? search : "UserName";

    setUserNameState({
      name: search,
      length: search.length
    });

  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };
  return (
    <NameContext.Provider value={usernameState}>
      <div>
        <Container style={{ minHeight: "100vh" }}>
          <SubContainer style={{ minHeight: "100vh" }}>
            <h1 className="text-center">Enter a Name</h1>
            <NameForm
              handleFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
              results={search}
            />
            <NameResults />
          </SubContainer>
        </Container>
      </div>
    </NameContext.Provider>
  );
}

export default UserNameTest;
