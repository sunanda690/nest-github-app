import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { Octokit } from "octokit";
import { stringify } from "querystring";


// export default async function handler(req : NextApiRequest , res: NextApiResponse) {
export default async function handler(req , res) {
  // https://github.com/sindresorhus/node-cli-boilerplate
  // const secret = process.env.GITHUB_SECRET;
  // const token = await getToken({ req:req, secret: secret, raw: true })
  const acc_token = process.env.GITHUB_ACCESS_TOKEN;
  
  // console.log("token" + stringify(req))
  const octokit = new Octokit({
    auth : acc_token
  }
  )
  
  await octokit.request('POST /repos/{template_owner}/{template_repo}/generate', {
      template_owner: 'sindresorhus',
      template_repo: 'node-cli-boilerplate',
      owner: req.user.name,
      name: 'Hello-World',
      description: 'This is your first repository',
      include_all_branches: false,
      'private': false
  })

  
  res.status(200).json({status: 'created'})
}