import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Octokit } from '@octokit/rest';
import { ConfigService } from '@nestjs/config';
import { CommitDto } from './dto/commit.dto';

@Injectable()
export class GithubService {
  private readonly octokit: Octokit;

  constructor(private readonly configService: ConfigService) {
    this.octokit = new Octokit({
      auth: `token ${this.configService.get<string>('GITHUB_PAT')}`,
    });
  }
  
  async getCommits(owner: string, repo: string): Promise<CommitDto[]> {
    try {
      const response = await this.octokit.repos.listCommits({
        owner,
        repo,
      });
      return response.data.map((commit) => {
        return {
          sha: commit.sha,
          author: commit.author.login,
          author_avatar: commit.author.avatar_url,
          author_name: commit.commit.author.name,
          message: commit.commit.message,
          date: commit.commit.author.date,
          url: commit.html_url,
        };
      });
    } catch (error) {
      const status = error.status || HttpStatus.INTERNAL_SERVER_ERROR;
      const message = error.message || 'Internal Server Error';
      throw new HttpException(message, status);
    }   
  }
}
