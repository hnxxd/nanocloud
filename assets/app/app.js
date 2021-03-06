/**
 * Nanocloud turns any traditional software into a cloud solution, without
 * changing or redeveloping existing source code.
 *
 * Copyright (C) 2016 Nanocloud Software
 *
 * This file is part of Nanocloud.
 *
 * Nanocloud is free software; you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * Nanocloud is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General
 * Public License
 * along with this program.  If not, see
 * <http://www.gnu.org/licenses/>.
 */

import Ember from 'ember';
import config from 'nanocloud/config/environment';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

Ember.libraries.register(config.APP.name, config.APP.version);

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

Ember.TextField.reopen({
  didInsertElement() {
    if (this.get('autofocus') === true) {
      this.$().focus();
    }
  },
});

loadInitializers(App, config.modulePrefix);

export default App;
