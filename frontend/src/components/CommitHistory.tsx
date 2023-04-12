import { useCommitHistory } from '../hooks/useCommitHistory';
import Commit from '../interfaces/Commit';

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
    <div>
      {commits.map((commit: Commit) => (
        <div key={commit.sha}>
          <div>{commit.sha}</div>
          <div>{commit.author}</div>
          <div>{commit.author_avatar}</div>
          <div>{commit.author_name}</div>
          <div>{commit.message}</div>
          <div>{commit.date}</div>
          <div>{commit.url}</div>
        </div>
      ))}
    </div>
  );
};

export default CommitHistory;
