import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Octokit } from '@octokit/rest';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GithubService {
  private readonly octokit: Octokit;

  constructor(private readonly configService: ConfigService) {
    this.octokit = new Octokit({
      auth: `token ${this.configService.get<string>('GITHUB_PAT')}`,
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
