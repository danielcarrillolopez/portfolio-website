export function getRelatedProjects(currentProject, allProjects, limit = 3) {
  return allProjects
    .filter(p => p.slug !== currentProject.slug)
    .map(p => {
      const sharedTags = p.tags.filter(tag => currentProject.tags.includes(tag)).length;
      return { ...p, score: sharedTags };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export function getRelatedPosts(currentPost, allPosts, limit = 2) {
  return allPosts
    .filter(p => p.slug !== currentPost.slug)
    .map(p => {
      const sharedTags = p.tags.filter(tag => currentPost.tags.includes(tag)).length;
      const categoryMatch = p.category === currentPost.category ? 2 : 0;
      return { ...p, score: sharedTags + categoryMatch };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
