import { useCommitHistory } from '../hooks/useCommitHistory';
import Commit from '../interfaces/Commit';
import './styles.css';
import moment from 'moment';

interface CommitHistoryProps {
  owner: string;
  repo: string;
}

const CommitHistory = ({ owner, repo }: CommitHistoryProps) => {
  const { commits, loading, error } = useCommitHistory({ owner, repo });

  if (loading) {
    return <div>Loading commits...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul className="commit-list">
      {commits.map((commit: Commit) => (
        <li key={commit.sha} className="commit-item">
          <div className="commit-message-container">
            <a href={commit.url} className="commit-message" target="_blank">{commit.message}</a>
            <div className="commit-meta">
              <img src={commit.author_avatar} alt={`${commit.author}'s avatar`} className="commit-avatar" />
              <a href={`https://github.com/${commit.author}`} className="commit-author" target="_blank">{commit.author}</a>
              <span>{`<${commit.author_name}>`}</span>
              <span className="commit-date">{moment(commit.date).fromNow()}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommitHistory;
