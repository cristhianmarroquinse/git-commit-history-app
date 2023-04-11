import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Octokit } from '@octokit/rest';

@Injectable()
export class GithubService {
  private readonly octokit: Octokit;
  
  constructor() {
    this.octokit = new Octokit({
      auth: `token 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`,
    });
  }
  
  async getCommits(owner: string, repo: string) {
    try {
      const response = await this.octokit.repos.listCommits({
        owner,
        repo,
      });
      return response.data;
    } catch (error) {
      const status = error.status || HttpStatus.INTERNAL_SERVER_ERROR;
      const message = error.message || 'Internal Server Error';
      throw new HttpException(message, status);
    }   
  }
}
