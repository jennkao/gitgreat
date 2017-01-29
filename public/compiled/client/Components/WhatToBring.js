'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Child component within the Event Planning component
//Allows users to create a list of items that need to be brought to an event;
var WhatToBring = function (_React$Component) {
  _inherits(WhatToBring, _React$Component);

  function WhatToBring(props) {
    _classCallCheck(this, WhatToBring);

    var _this = _possibleConstructorReturn(this, (WhatToBring.__proto__ || Object.getPrototypeOf(WhatToBring)).call(this, props));

    _this.state = {
      itemList: [{ item: 'mashed potatoes', cost: '20', owner: 'Jenn' }],
      currentItem: null,
      currentOwner: null,
      currentCost: null
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleItemChange = _this.handleItemChange.bind(_this);
    _this.handleCostChange = _this.handleCostChange.bind(_this);
    _this.handleOwnerChange = _this.handleOwnerChange.bind(_this);
    _this.fetchItems = _this.fetchItems.bind(_this);
    return _this;
  }

  _createClass(WhatToBring, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchItems();
    }
  }, {
    key: 'fetchItems',
    value: function fetchItems() {
      //The event name is passed along to the server via query parameters 
      //so that we can display the itemlist associated with a specific event
      var eventId = this.props.featuredEvent.id;
      var successHandler = function successHandler(data) {
        this.setState({ itemList: data });
      };
      $.ajax({
        method: 'GET',
        url: '/events/' + eventId + '/items',
        success: successHandler.bind(this)
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      //The event name is passed along to the server via query parameters 
      //so that we can post to the itemlistTable associated with a specific event
      event.preventDefault();
      var item = {
        item: this.state.currentItem,
        cost: this.state.currentCost,
        owner: this.state.currentOwner
      };
      var successHandler = function successHandler(data) {
        this.fetchItems();
      };
      var eventId = this.props.featuredEvent.id;
      $.ajax({
        method: 'POST',
        url: '/events/' + eventId + '/items',
        data: JSON.stringify(item),
        contentType: 'application/json',
        success: successHandler.bind(this)
      });
    }
  }, {
    key: 'handleItemChange',
    value: function handleItemChange(event) {
      this.setState({
        currentItem: event.target.value
      });
    }
  }, {
    key: 'handleOwnerChange',
    value: function handleOwnerChange(event) {
      this.setState({
        currentOwner: event.target.value
      });
    }
  }, {
    key: 'handleCostChange',
    value: function handleCostChange(event) {
      this.setState({
        currentCost: event.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { className: 'bringForm', onSubmit: this.handleSubmit },
          React.createElement(
            'label',
            null,
            'Owner:',
            React.createElement('input', { type: 'text', name: 'owner',
              onChange: this.handleOwnerChange
            })
          ),
          React.createElement(
            'label',
            null,
            'Item:',
            React.createElement('input', { type: 'text', name: 'item',
              onChange: this.handleItemChange
            })
          ),
          React.createElement(
            'label',
            null,
            'Cost:',
            React.createElement('input', { type: 'text', name: 'cost',
              onChange: this.handleCostChange
            })
          ),
          React.createElement('input', { type: 'submit', value: 'Submit' })
        ),
        React.createElement(
          'table',
          { className: 'bringTable' },
          React.createElement(
            'thead',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'th',
                null,
                'Owner'
              ),
              React.createElement(
                'th',
                null,
                'Item'
              ),
              React.createElement(
                'th',
                null,
                'Cost ($)'
              )
            )
          ),
          React.createElement(
            'tbody',
            null,
            this.state.itemList.map(function (item, index) {
              return React.createElement(
                'tr',
                { key: index },
                React.createElement(
                  'th',
                  null,
                  item.owner
                ),
                React.createElement(
                  'th',
                  null,
                  item.item
                ),
                React.createElement(
                  'th',
                  null,
                  item.cost
                )
              );
            })
          )
        )
      );
    }
  }]);

  return WhatToBring;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL1doYXRUb0JyaW5nLmpzeCJdLCJuYW1lcyI6WyJXaGF0VG9CcmluZyIsInByb3BzIiwic3RhdGUiLCJpdGVtTGlzdCIsIml0ZW0iLCJjb3N0Iiwib3duZXIiLCJjdXJyZW50SXRlbSIsImN1cnJlbnRPd25lciIsImN1cnJlbnRDb3N0IiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUl0ZW1DaGFuZ2UiLCJoYW5kbGVDb3N0Q2hhbmdlIiwiaGFuZGxlT3duZXJDaGFuZ2UiLCJmZXRjaEl0ZW1zIiwiZXZlbnRJZCIsImZlYXR1cmVkRXZlbnQiLCJpZCIsInN1Y2Nlc3NIYW5kbGVyIiwiZGF0YSIsInNldFN0YXRlIiwiJCIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJzdWNjZXNzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50VHlwZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaW5kZXgiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7SUFDTUEsVzs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFVLENBQUMsRUFBQ0MsTUFBTSxpQkFBUCxFQUEwQkMsTUFBTSxJQUFoQyxFQUFzQ0MsT0FBTyxNQUE3QyxFQUFELENBREM7QUFFWEMsbUJBQWEsSUFGRjtBQUdYQyxvQkFBYyxJQUhIO0FBSVhDLG1CQUFhO0FBSkYsS0FBYjtBQU1BLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkQsSUFBdEIsT0FBeEI7QUFDQSxVQUFLRSxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkYsSUFBdEIsT0FBeEI7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QUQsRUFBTytCLEtBQVA7QUFBQSxxQkFDeEI7QUFBQTtBQUFBLGtCQUFJLEtBQUtBLEtBQVQ7QUFDRTtBQUFBO0FBQUE7QUFBSy9CLHVCQUFLRTtBQUFWLGlCQURGO0FBRUU7QUFBQTtBQUFBO0FBQUtGLHVCQUFLQTtBQUFWLGlCQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUtBLHVCQUFLQztBQUFWO0FBSEYsZUFEd0I7QUFBQSxhQUF6QjtBQURIO0FBUkY7QUF0QkYsT0FERjtBQTJDRDs7OztFQW5IdUIrQixNQUFNQyxTIiwiZmlsZSI6IldoYXRUb0JyaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9DaGlsZCBjb21wb25lbnQgd2l0aGluIHRoZSBFdmVudCBQbGFubmluZyBjb21wb25lbnRcbi8vQWxsb3dzIHVzZXJzIHRvIGNyZWF0ZSBhIGxpc3Qgb2YgaXRlbXMgdGhhdCBuZWVkIHRvIGJlIGJyb3VnaHQgdG8gYW4gZXZlbnQ7XG5jbGFzcyBXaGF0VG9CcmluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpdGVtTGlzdDogW3tpdGVtOiAnbWFzaGVkIHBvdGF0b2VzJywgY29zdDogJzIwJywgb3duZXI6ICdKZW5uJ31dLFxuICAgICAgY3VycmVudEl0ZW06IG51bGwsXG4gICAgICBjdXJyZW50T3duZXI6IG51bGwsXG4gICAgICBjdXJyZW50Q29zdDogbnVsbFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlSXRlbUNoYW5nZSA9IHRoaXMuaGFuZGxlSXRlbUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ29zdENoYW5nZSA9IHRoaXMuaGFuZGxlQ29zdENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlT3duZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZU93bmVyQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mZXRjaEl0ZW1zID0gdGhpcy5mZXRjaEl0ZW1zLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaEl0ZW1zKCk7XG4gIH1cblxuICBmZXRjaEl0ZW1zKCkge1xuICAgIC8vVGhlIGV2ZW50IG5hbWUgaXMgcGFzc2VkIGFsb25nIHRvIHRoZSBzZXJ2ZXIgdmlhIHF1ZXJ5IHBhcmFtZXRlcnMgXG4gICAgLy9zbyB0aGF0IHdlIGNhbiBkaXNwbGF5IHRoZSBpdGVtbGlzdCBhc3NvY2lhdGVkIHdpdGggYSBzcGVjaWZpYyBldmVudFxuICAgIHZhciBldmVudElkID0gdGhpcy5wcm9wcy5mZWF0dXJlZEV2ZW50LmlkO1xuICAgIHZhciBzdWNjZXNzSGFuZGxlciA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2l0ZW1MaXN0OiBkYXRhfSk7XG4gICAgfTtcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogYC9ldmVudHMvJHtldmVudElkfS9pdGVtc2AsXG4gICAgICBzdWNjZXNzOiBzdWNjZXNzSGFuZGxlci5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAvL1RoZSBldmVudCBuYW1lIGlzIHBhc3NlZCBhbG9uZyB0byB0aGUgc2VydmVyIHZpYSBxdWVyeSBwYXJhbWV0ZXJzIFxuICAgIC8vc28gdGhhdCB3ZSBjYW4gcG9zdCB0byB0aGUgaXRlbWxpc3RUYWJsZSBhc3NvY2lhdGVkIHdpdGggYSBzcGVjaWZpYyBldmVudFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGl0ZW0gPSB7XG4gICAgICBpdGVtOiB0aGlzLnN0YXRlLmN1cnJlbnRJdGVtLFxuICAgICAgY29zdDogdGhpcy5zdGF0ZS5jdXJyZW50Q29zdCxcbiAgICAgIG93bmVyOiB0aGlzLnN0YXRlLmN1cnJlbnRPd25lclxuICAgIH07XG4gICAgdmFyIHN1Y2Nlc3NIYW5kbGVyID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdGhpcy5mZXRjaEl0ZW1zKCk7XG4gICAgfTtcbiAgICB2YXIgZXZlbnRJZCA9IHRoaXMucHJvcHMuZmVhdHVyZWRFdmVudC5pZDtcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6IGAvZXZlbnRzLyR7ZXZlbnRJZH0vaXRlbXNgLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoaXRlbSksXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgc3VjY2Vzczogc3VjY2Vzc0hhbmRsZXIuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlSXRlbUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudEl0ZW06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG4gIGhhbmRsZU93bmVyQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50T3duZXI6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG4gIGhhbmRsZUNvc3RDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRDb3N0OiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYnJpbmdGb3JtXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBPd25lcjpcbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nb3duZXInIFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlT3duZXJDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIEl0ZW06IFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J2l0ZW0nIFxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJdGVtQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIENvc3Q6IFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J2Nvc3QnIFxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDb3N0Q2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJicmluZ1RhYmxlXCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+T3duZXI8L3RoPlxuICAgICAgICAgICAgICA8dGg+SXRlbTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Db3N0ICgkKTwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaXRlbUxpc3QubWFwKCAoaXRlbSwgaW5kZXgpID0+IFxuICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPHRoPntpdGVtLm93bmVyfTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPntpdGVtLml0ZW19PC90aD5cbiAgICAgICAgICAgICAgICA8dGg+e2l0ZW0uY29zdH08L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ==