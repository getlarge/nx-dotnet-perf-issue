import { execSync } from 'node:child_process';

const numProjects = 50; // Adjust this number as needed

for (let i = 0; i < numProjects; i++) {
  const projectName = `project-${i}`;
  try {
    console.log(`Creating project: ${projectName}`);
    execSync(
      `npx nx g @nx-dotnet/core:app --language="C#" --name="${projectName}" --testTemplate="none" --pathScheme="nx" --template="webapp"`,
      {
        stdio: 'inherit',
      }
    );
  } catch (error) {
    console.error(`Failed to create project ${projectName}:`, error);
  }
}
