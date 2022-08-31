import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Button, Tabs } from "antd";
import PersonalInfo from "../components/PersonalInfo";
import { Form } from "antd";
import SkillsEducation from "../components/SkillsEducation";
import ExperienceProjects from "../components/ExperienceProjects";

function Profile() {
  const { TabPane } = Tabs;
  const onChange = (key) => {
    //console.log(key);
  };
  return (
    <DefaultLayout>
      <div className="update-profile">
        <h2>Update Profile</h2>
        <Form
          layout="vertical"
          onFinish={(values) => console.log("Values ----------- ", values)}
        >
          <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="Personal Info" key="1">
              <PersonalInfo />
            </TabPane>
            <TabPane tab="Skills and Education" key="2">
              <SkillsEducation />
            </TabPane>
            <TabPane tab="Experience / Projects" key="3">
              <ExperienceProjects />
            </TabPane>
          </Tabs>
          <Button htmlType="submit">UPDATE</Button>
        </Form>
      </div>
    </DefaultLayout>
  );
}

export default Profile;
