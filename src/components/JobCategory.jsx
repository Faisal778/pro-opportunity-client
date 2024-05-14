import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const JobCategory = () => {
    return (
      <div className='container px-10 py-10 mx-auto'>
          <Tabs>
        <div className='flex justify-center'>
        <TabList>
          <Tab>All Jobs</Tab>
          <Tab>On-site Jobs</Tab>
          <Tab>Remote Jobs</Tab>
          <Tab>Hybrid Jobs</Tab>
          <Tab>Part-time Jobs</Tab>
        </TabList>
        </div>
    
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
      </Tabs>
      </div>
    );
};

export default JobCategory;