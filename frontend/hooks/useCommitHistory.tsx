import { useEffect, useState } from 'react';
import Commit from '@/interfaces/Commit';

interface UseCommitHistoryProps {
  owner: string;
  repo: string;
}

interface UseCommitHistoryResult {
  commits: Commit[];
  loading: boolean;
  error: string;
}

export const useCommitHistory = ({ owner, repo }: UseCommitHistoryProps): UseCommitHistoryResult => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchCommits = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/repositories/${owner}/${repo}/commits`);
        const data = await response.json();
        setCommits(data);
      } catch (error) {
        setError('Failed to fetch commits');
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, [owner, repo]);

  return { commits, loading, error };
};