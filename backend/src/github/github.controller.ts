import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('repositories')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get(':owner/:repo/commits')
  async getCommits(@Param('owner') owner: string, @Param('repo') repo: string) {
    const commits = await this.githubService.getCommits(owner, repo);
    return commits;
  }
}
