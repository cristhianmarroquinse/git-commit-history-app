import { useCommitHistory } from '@/hooks/useCommitHistory';
import Commit from '@/interfaces/Commit';
import moment from 'moment';

interface CommitHistoryProps {
  owner: string;
  repo: string;
}

const CommitHistory = ({ owner, repo }: CommitHistoryProps) => {
  const { commits, loading, error } = useCommitHistory({ owner, repo });

  if (loading) {
    return <div className="grid h-screen place-items-center">Loading commits...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul className="p-0 w-4/5 rounded-lg mx-auto	my-5 border border-black">
      {commits.map((commit: Commit) => (
        <li key={commit.sha} className="border-b p-5 border-b-black hover:bg-gray-200 last:border-b-0 ">
          <div>
            <div className="text-center">
              <a href={commit.url} className="font-semibold text-blue-600 no-underline hover:underline" target="_blank" rel="noreferrer">
                <div className="text-lg">{commit.message}</div>
                <div className="text-xs">{commit.sha}</div> 
              </a>
            </div>
            <div className="flex items-center text-sm text-gray-700 pt-2 justify-evenly">
              <img src={commit.author_avatar} alt={`${commit.author}'s avatar`} className="inline-block w-8 h-8 mr-4 rounded-full" />
              <a href={`https://github.com/${commit.author}`} className="font-bold mr-2 no-underline" target="_blank" rel="noreferrer">{commit.author}</a>
              <span>{`<${commit.author_name}>`}</span>
              <span className="py-0 px-8">{`Committed ${moment(commit.date).fromNow()}`}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommitHistory;
