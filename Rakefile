require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"


# Change your GitHub reponame
GITHUB_REPONAME = "mriveralee/mriveralee.github.io"


desc "Generate blog files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site"
  })).process
end


desc "Generate and publish blog to gh-pages"
task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    cp_r "_site/.", tmp

    # pwd = Dir.pwd
    # Dir.chdir tmp
    system "git checkout master"
    system "git pull --rebase"
    cp_r tmp, "./"
    system "git add -A ."
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m #{message.inspect}"
    #system "git push origin master"
    system "git checkout source"
    Dir.chdir pwd
  end
end
