import React from "react";
import Profile from "../screens/Profile";



const db = () => {
  const dataBase = [{ name: "Tom", role: "CTO" }];
  return (
    <View>
      <FileList
        data={dataBase}
        renderItem={({ item }) => {
          return <Profile name={item.name} role={item.role} />;
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default db;