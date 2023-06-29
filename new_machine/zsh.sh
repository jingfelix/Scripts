install_omz() {
    # download oh-my-zsh
    sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
}

install_plugins() {
    # install zsh-syntax-highlighting
    git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

    # install zsh auto-suggestions
    git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

    # some hints
    echo "Remember to activate plugins in ~/.zshrc"
}

if [ "${SHELL##*/}" = "zsh" ]; then
    echo "Using Zsh, install OMZ"

    # check if ~/.oh-my-zsh exists
    if [ -d ~/.oh-my-zsh ]; then
        echo "~/.oh-my-zsh already exists"
        exit 0
    fi
    install_omz

    install_plugins
else
    echo "Not using Zsh, install zsh"
    # install zsh
    sudo apt install zsh
fi








