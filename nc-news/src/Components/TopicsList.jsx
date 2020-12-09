import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { fetchTopics } from './Api';
import TopicsCard from './TopicsCard';
import '../CSS/Topics.css';

const TopicsList = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTopics().then((data) => {
      setTopics(data);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading item="topics" />
  ) : (
    <section>
      <ul className="topicsList">
        {topics.map((topic) => {
          return <TopicsCard key={topic.slug} {...topic} />;
        })}
      </ul>
    </section>
  );
};

export default TopicsList;
